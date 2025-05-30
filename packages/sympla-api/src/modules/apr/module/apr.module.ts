import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AprService } from '../service/apr.service';
import { AprPerguntasService } from '../service/aprPerguntas.service';
import { AprPerguntasRelacionamentoService } from '../service/aprPerguntasRelacionamento.service';
import { AprController } from '../controller/apr.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AprController],
  providers: [
    AprService,
    AprPerguntasService,
    AprPerguntasRelacionamentoService,
  ],
  exports: [AprService, AprPerguntasService, AprPerguntasRelacionamentoService],
})
export class AprModule {}
