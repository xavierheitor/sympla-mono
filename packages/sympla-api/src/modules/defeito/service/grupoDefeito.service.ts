import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GrupoDefeitoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.grupoDefeitoEquipamento.findMany();
  }
}
