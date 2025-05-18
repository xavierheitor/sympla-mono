import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TipoAtividadeService } from '../service/tipoAtividade.service';
import { AtividadeController } from '../controller/atividade.controller';
import { AtividadeService } from '../service/atividade.service';

@Module({
  imports: [PrismaModule],
  controllers: [AtividadeController],
  providers: [TipoAtividadeService, AtividadeService],
  exports: [TipoAtividadeService, AtividadeService],
})
export class AtividadeModule {}
