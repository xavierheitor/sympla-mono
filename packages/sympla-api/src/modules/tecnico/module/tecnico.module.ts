import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TecnicoService } from '../service/tecnico.service';
import { TecnicoController } from '../controller/tecnico.controller';

@Module({
  imports: [PrismaModule],
  controllers: [TecnicoController],
  providers: [TecnicoService],
  exports: [TecnicoService],
})
export class TecnicoModule {}
