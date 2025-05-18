import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AtividadeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.atividade.findMany();
  }

  async findAllByUsuarioId(usuarioId: string) {
    const atribuicoes = await this.prisma.atividadeAtribuicao.findMany({
      where: {
        usuarioMobileId: usuarioId,
      },
      include: {
        atividade: {
          include: {
            tipoAtividade: true,
            nota: {
              include: {
                equipamento: {
                  include: {
                    subestacao: true, // para buscar nome da subestação
                  },
                },
              },
            },
          },
        },
      },
    });

    return atribuicoes.map((atribuicao) => {
      const { atividade } = atribuicao;
      const { nota, tipoAtividade } = atividade;
      const equipamento = nota?.equipamento;

      return {
        id: atividade.id,
        titulo: `${tipoAtividade?.nome ?? 'Atividade'} - ${equipamento?.nome ?? ''}`,
        descricao: atividade.descricao ?? '',
        ordemServico: atividade.ordemServico ?? '',
        subestacao: equipamento?.subestacao?.sigla ?? '',
        status: atividade.status,
        dataLimite: atividade.prazoLimite,
        dataInicio: atividade.dataExecucaoInicio,
        dataFim: atividade.dataExecucaoFim,
        equipamentoId: equipamento?.id ?? '',
        tipoAtividadeId: tipoAtividade?.id ?? '',
        equipamento: equipamento
          ? {
              id: equipamento.id,
              nome: equipamento.nome,
              descricao: equipamento.descricao,
              subestacaoId: equipamento.subestacaoId,
              grupoDefeitoCodigoId: equipamento.grupoDefeitoCodigoId,
              grupoId: equipamento.grupoId,
              subgrupoId: equipamento.subgrupoId,
            }
          : null,
        // 🔴 tipoAtividade removido daqui, conforme solicitado
      };
    });
  }
}
