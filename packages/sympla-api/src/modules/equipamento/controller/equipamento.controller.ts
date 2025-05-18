import { Controller, Get } from '@nestjs/common';
import { EquipamentoService } from '../service/equipamento.service';

@Controller('equipamento')
export class EquipamentoController {
  constructor(private readonly equipamentoService: EquipamentoService) {}

  @Get()
  async findAll() {
    return await this.equipamentoService.findAll();
  }
}
