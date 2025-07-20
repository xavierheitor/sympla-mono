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
        // ✅ Opcional: ativar esse filtro para trazer só atividades com equipamento vinculado
        // atividade: {
        //   notaPma: {
        //     equipamentoId: { not: null },
        //   },
        // },
      },
      include: {
        atividade: {
          include: {
            tipoAtividade: true,
            notaPma: {
              include: {
                equipamento: {
                  include: {
                    subestacao: true,
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

      console.log(
        `[AtividadeService] Atividade ${atividade.id} → Equipamento: ${equipamento?.id ?? 'null'}, Subestação: ${equipamento?.subestacao?.sigla ?? 'null'}`,
      );

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
        equipamento: equipamento?.id
          ? {
              id: equipamento.id,
              nome: equipamento.nome,
              descricao: equipamento.descricao,
              subestacaoId: equipamento.subestacaoId,
              subestacao: equipamento.subestacao,
              grupoDefeitoCodigo: equipamento.grupoDefeitoCodigo,
            }
          : null,
      };
    });
  }
}
