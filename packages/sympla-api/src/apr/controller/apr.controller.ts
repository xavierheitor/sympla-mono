import { Controller, Get } from '@nestjs/common';
import { AprService } from '../service/apr.service';
import { AprPerguntasService } from '../service/aprPerguntas.service';
import { AprPerguntasRelacionamentoService } from '../service/aprPerguntasRelacionamento.service';

@Controller('apr')
export class AprController {
  constructor(
    private readonly aprService: AprService,
    private readonly aprPerguntasService: AprPerguntasService,
    private readonly aprPerguntasRelacionamentoService: AprPerguntasRelacionamentoService,
  ) {}

  @Get('modelos')
  async findAllAprModelos() {
    return await this.aprService.findAll();
  }

  @Get('perguntas')
  async findAllAprPerguntas() {
    return await this.aprPerguntasService.findAll();
  }

  @Get('perguntas-relacionamento')
  async findAllAprPerguntasRelacionamento() {
    return await this.aprPerguntasRelacionamentoService.findAll();
  }
}
