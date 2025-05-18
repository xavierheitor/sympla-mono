import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DefeitoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.defeito.findMany();
  }
}
