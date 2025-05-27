import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EquipamentoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const equipamentos = await this.prisma.equipamento.findMany({
      include: {
        subestacao: true,
      },
    });

    const grupos = await this.prisma.grupoDefeitoEquipamento.findMany();

    const grupoMap = new Map(grupos.map((g) => [g.codigo, g.id]));

    return equipamentos.map((equipamento) => {
      const grupoId = grupoMap.get(equipamento.grupoDefeitoCodigo);

      if (!grupoId) {
        console.error(
          `⚠️ GrupoId não encontrado para grupoDefeitoCodigo: "${equipamento.grupoDefeitoCodigo}" no equipamento "${equipamento.nome}"`,
        );
      }

      return {
        ...equipamento,
        subestacao: equipamento.subestacao?.sigla ?? null,
        grupoId: grupoId ?? null,
      };
    });
  }
}
