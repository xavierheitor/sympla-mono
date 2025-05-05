import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TestService {
  constructor(private readonly prisma: PrismaService) {}

  async contarRegistros(): Promise<number> {
    return await this.prisma.test.count();
  }
}
