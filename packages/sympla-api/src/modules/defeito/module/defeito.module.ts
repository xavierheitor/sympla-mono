import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DefeitoService } from '../service/defeito.service';
import { GrupoDefeitoService } from '../service/grupoDefeito.service';
import { GrupoDefeitoCodigoService } from '../service/grupoDefeitoCodigo.service';
import { SubgrupoDefeitoService } from '../service/subgrupoDefeito.service';
import { DefeitoController } from '../controller/defeito.controller';

@Module({
  imports: [PrismaModule],
  controllers: [DefeitoController],
  providers: [
    DefeitoService,
    GrupoDefeitoService,
    SubgrupoDefeitoService,
    GrupoDefeitoCodigoService,
  ],
  exports: [
    DefeitoService,
    GrupoDefeitoService,
    SubgrupoDefeitoService,
    GrupoDefeitoCodigoService,
  ],
})
export class DefeitoModule {}
