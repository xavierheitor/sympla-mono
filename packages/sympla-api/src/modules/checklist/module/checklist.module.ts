import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ChecklistService } from '../service/checklist.service';
import { ChecklistPerguntaService } from '../service/checklistPergunta.service';
import { ChecklistPerguntaRelacionamentoService } from '../service/checklistPerguntaRelacionamento.service';
import { ChecklistController } from '../controller/checklist.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ChecklistController],
  providers: [
    ChecklistService,
    ChecklistPerguntaService,
    ChecklistPerguntaRelacionamentoService,
  ],
  exports: [
    ChecklistService,
    ChecklistPerguntaService,
    ChecklistPerguntaRelacionamentoService,
  ],
})
export class ChecklistModule {}
