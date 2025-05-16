import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TipoAtividadeService } from '../service/tipoAtividade.service';

@Module({
  imports: [PrismaModule],
  providers: [TipoAtividadeService],
  exports: [TipoAtividadeService],
})
export class AtividadeModule {}
