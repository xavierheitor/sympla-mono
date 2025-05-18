import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AprPerguntasService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.aprPerguntas.findMany();
  }
}
