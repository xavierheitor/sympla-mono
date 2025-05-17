import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { DefeitoService } from '../service/defeito.service';
import { GrupoDefeitoService } from '../service/grupoDefeito.service';
import { GrupoDefeitoCodigoService } from '../service/grupoDefeitoCodigo.service';
import { SubgrupoDefeitoService } from '../service/subgrupoDefeito.service';

@Module({
  imports: [PrismaModule],
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
