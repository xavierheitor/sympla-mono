import { Controller, Get } from '@nestjs/common';
import { TipoAtividadeService } from '../service/tipoAtividade.service';

@Controller('atividade')
export class AtividadeController {
  constructor(private readonly tipoAtividadeService: TipoAtividadeService) {}

  @Get('tipo-atividades')
  async findAllTipoAtividade() {
    return await this.tipoAtividadeService.findAll();
  }
}
