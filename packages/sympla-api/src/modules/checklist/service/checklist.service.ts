import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChecklistService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.checklistModelo.findMany();
  }

  async findById(id: string) {
    return await this.prisma.checklistModelo.findUnique({ where: { id } });
  }
}
