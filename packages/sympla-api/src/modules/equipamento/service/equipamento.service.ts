import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EquipamentoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const equipamentos = await this.prisma.equipamento.findMany({
      include: {
        subestacao: true,
        grupoDefeitoCodigo: true,
      },
    });

    return equipamentos.map((equipamento) => ({
      ...equipamento,
      subestacao: equipamento.subestacao?.sigla ?? null,
      grupoDefeitoCodigo: equipamento.grupoDefeitoCodigo?.codigo ?? null,
    }));
  }
}
