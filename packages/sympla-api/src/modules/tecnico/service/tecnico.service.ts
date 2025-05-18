import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TecnicoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const tecnicos = await this.prisma.tecnico.findMany();

    return tecnicos.map((tecnico) => ({
      ...tecnico,
      matricula: '21050505',
    }));
  }
}
