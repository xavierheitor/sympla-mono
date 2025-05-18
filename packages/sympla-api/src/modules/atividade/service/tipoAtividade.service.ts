import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoAtividadeService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.tipoAtividade.findMany();
  }

  async findById(id: string) {
    return this.prisma.tipoAtividade.findUnique({ where: { id } });
  }
}
