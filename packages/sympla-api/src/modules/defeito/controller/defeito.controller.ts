import { Controller, Get } from '@nestjs/common';
import { DefeitoService } from '../service/defeito.service';
import { GrupoDefeitoService } from '../service/grupoDefeito.service';
import { SubgrupoDefeitoService } from '../service/subgrupoDefeito.service';

@Controller('defeito')
export class DefeitoController {
  constructor(
    private readonly defeitoService: DefeitoService,
    private readonly grupoDefeitoService: GrupoDefeitoService,
    private readonly subgrupoDefeitoService: SubgrupoDefeitoService,
  ) {}

  @Get()
  async findAll() {
    return await this.defeitoService.findAll();
  }

  @Get('grupo-defeito')
  async findAllGrupoDefeito() {
    return await this.grupoDefeitoService.findAll();
  }

  @Get('subgrupo-defeito')
  async findAllSubgrupoDefeito() {
    return await this.subgrupoDefeitoService.findAll();
  }
}
