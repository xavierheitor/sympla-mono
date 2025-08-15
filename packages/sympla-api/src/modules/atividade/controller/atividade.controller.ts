import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { TipoAtividadeService } from '../service/tipoAtividade.service';
import { GetUsuarioMobileId } from '../../auth/decorator/get-user-id-decorator';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { AtividadeService } from '../service/atividade.service';

@Controller('atividade')
export class AtividadeController {
  constructor(
    private readonly tipoAtividadeService: TipoAtividadeService,
    private readonly atividadeService: AtividadeService,
  ) {}

  @Get('tipo-atividades')
  async findAllTipoAtividade() {
    return await this.tipoAtividadeService.findAll();
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAllAtividades(@GetUsuarioMobileId() usuarioId: string) {
    console.log('[ATIVIDADE] Usuario ID:', usuarioId);
    return this.atividadeService.findAllByUsuarioId(usuarioId);
  }

  @Post('upload/:id')
  uploadAtividade(@Param('id') id: string, @Body() data: any) {
    console.log('[ATIVIDADE UPLOAD] ID:', id);
    console.log('[ATIVIDADE UPLOAD] JSON recebido:', JSON.stringify(data, null, 2));
    return { message: 'ok' };
  }
}
