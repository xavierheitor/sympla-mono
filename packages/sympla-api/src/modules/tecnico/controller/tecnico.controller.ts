import { Controller, Get } from '@nestjs/common';
import { TecnicoService } from '../service/tecnico.service';

@Controller('tecnico')
export class TecnicoController {
  constructor(private readonly tecnicoService: TecnicoService) {}

  @Get()
  async findAll() {
    return await this.tecnicoService.findAll();
  }
}
