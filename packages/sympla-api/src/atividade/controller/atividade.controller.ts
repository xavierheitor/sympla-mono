import { Controller, Get, UseGuards } from '@nestjs/common';
import { TipoAtividadeService } from '../service/tipoAtividade.service';
import { GetUsuarioMobileId } from 'src/auth/get-user-id-decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('atividade')
export class AtividadeController {
  constructor(private readonly tipoAtividadeService: TipoAtividadeService) {}

  @Get('tipo-atividades')
  async findAllTipoAtividade() {
    return await this.tipoAtividadeService.findAll();
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAllAtividades(@GetUsuarioMobileId() usuarioId: string) {
    console.log(usuarioId);
  }
}
