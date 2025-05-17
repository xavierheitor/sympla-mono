import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TecnicoService } from '../service/tecnico.service';

@Module({
  imports: [PrismaModule],
  providers: [TecnicoService],
  exports: [TecnicoService],
})
export class TecnicoModule {}
