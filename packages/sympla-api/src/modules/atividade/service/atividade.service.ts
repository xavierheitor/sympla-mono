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
        deletedAt: null,
      },
      include: {
        atividade: {
          include: {
            tipoAtividade: true,
            notaPma: {
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
      const { notaPma, tipoAtividade } = atividade;
      const equipamento = notaPma?.equipamento;

      return {
        id: atividade.id,
        titulo: `${tipoAtividade?.nome ?? 'Atividade'} - ${equipamento?.nome ?? ''}`,
        descricao: atividade.descricao ?? '',
        ordemServico: atividade.ordemServico ?? '',
        subestacao: equipamento?.subestacao?.sigla ?? '',
        status: atividade.status,
        dataLimite: atividade.dataFimPlan,
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
              subestacao: equipamento.subestacao,
              grupoDefeitoCodigo: equipamento.grupoDefeitoCodigo,
            }
          : null,
        // 🔴 tipoAtividade removido daqui, conforme solicitado
      };
    });
  }
}
