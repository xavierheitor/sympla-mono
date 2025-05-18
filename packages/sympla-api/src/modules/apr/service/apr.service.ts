import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AprService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.aprModelo.findMany();
  }

  async findById(id: string) {
    return this.prisma.aprModelo.findUnique({ where: { id } });
  }
}
