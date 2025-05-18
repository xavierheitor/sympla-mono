import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GrupoDefeitoCodigoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.grupoDefeitoCodigo.findMany();
  }
}
