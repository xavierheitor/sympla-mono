import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MobileUsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByMatricula(matricula: string) {
    return await this.prisma.usuarioMobile.findUnique({
      where: { matricula },
    });
  }

  async findById(id: number) {
    return await this.prisma.usuarioMobile.findUnique({
      where: { id },
    });
  }
}
