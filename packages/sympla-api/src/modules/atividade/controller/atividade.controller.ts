import { Controller, Get, UseGuards } from '@nestjs/common';
import { TipoAtividadeService } from '../service/tipoAtividade.service';
import { GetUsuarioMobileId } from '../../auth/decorator/get-user-id-decorator';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@Controller('atividade')
export class AtividadeController {
  constructor(private readonly tipoAtividadeService: TipoAtividadeService) {}

  @Get('tipo-atividades')
  async findAllTipoAtividade() {
    return await this.tipoAtividadeService.findAll();
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAllAtividades(@GetUsuarioMobileId() usuarioId: string) {
    console.log('[ATIVIDADE] Usuario ID:', usuarioId);
    return this.tipoAtividadeService.findAll();
  }
}
