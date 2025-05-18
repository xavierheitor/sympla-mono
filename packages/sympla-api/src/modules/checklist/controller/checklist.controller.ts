import { Controller, Get } from '@nestjs/common';
import { ChecklistService } from '../service/checklist.service';
import { ChecklistPerguntaService } from '../service/checklistPergunta.service';
import { ChecklistPerguntaRelacionamentoService } from '../service/checklistPerguntaRelacionamento.service';

@Controller('checklist')
export class ChecklistController {
  constructor(
    private readonly checklistService: ChecklistService,
    private readonly checklistPerguntaService: ChecklistPerguntaService,
    private readonly checklistPerguntaRelacionamentoService: ChecklistPerguntaRelacionamentoService,
  ) {}

  @Get('modelos')
  async findAllChecklistModelos() {
    return await this.checklistService.findAll();
  }

  @Get('perguntas')
  async findAllChecklistPerguntas() {
    return await this.checklistPerguntaService.findAll();
  }

  @Get('perguntas-relacionamento')
  async findAllChecklistPerguntasRelacionamento() {
    return await this.checklistPerguntaRelacionamentoService.findAll();
  }
}
