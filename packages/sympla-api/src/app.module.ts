import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/module/auth.module';
import { MobileUsersModule } from './modules/mobile-users/mobile-users.module';
import { AprModule } from './modules/apr/module/apr.module';
import { AprController } from './modules/apr/controller/apr.controller';
import { AprService } from './modules/apr/service/apr.service';
import { AprPerguntasService } from './modules/apr/service/aprPerguntas.service';
import { AprPerguntasRelacionamentoService } from './modules/apr/service/aprPerguntasRelacionamento.service';
import { AtividadeController } from './modules/atividade/controller/atividade.controller';
import { AtividadeModule } from './modules/atividade/module/atividade.module';
import { TipoAtividadeService } from './modules/atividade/service/tipoAtividade.service';
import { ChecklistModule } from './modules/checklist/module/checklist.module';
import { ChecklistController } from './modules/checklist/controller/checklist.controller';
import { ChecklistService } from './modules/checklist/service/checklist.service';
import { ChecklistPerguntaService } from './modules/checklist/service/checklistPergunta.service';
import { ChecklistPerguntaRelacionamentoService } from './modules/checklist/service/checklistPerguntaRelacionamento.service';
import { DefeitoModule } from './modules/defeito/module/defeito.module';
import { DefeitoController } from './modules/defeito/controller/defeito.controller';
import { DefeitoService } from './modules/defeito/service/defeito.service';
import { GrupoDefeitoService } from './modules/defeito/service/grupoDefeito.service';
import { SubgrupoDefeitoService } from './modules/defeito/service/subgrupoDefeito.service';
import { GrupoDefeitoCodigoService } from './modules/defeito/service/grupoDefeitoCodigo.service';
import { EquipamentoModule } from './modules/equipamento/module/equipamento.module';
import { EquipamentoController } from './modules/equipamento/controller/equipamento.controller';
import { EquipamentoService } from './modules/equipamento/service/equipamento.service';
import { TecnicoModule } from './modules/tecnico/module/tecnico.module';
import { TecnicoController } from './modules/tecnico/controller/tecnico.controller';
import { TecnicoService } from './modules/tecnico/service/tecnico.service';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    MobileUsersModule,
    AprModule,
    AtividadeModule,
    ChecklistModule,
    DefeitoModule,
    EquipamentoModule,
    TecnicoModule,
  ],
  controllers: [
    AppController,
    AprController,
    AtividadeController,
    ChecklistController,
    DefeitoController,
    EquipamentoController,
    TecnicoController,
  ],
  providers: [
    AppService,
    AprService,
    AprPerguntasService,
    AprPerguntasRelacionamentoService,
    TipoAtividadeService,
    ChecklistService,
    ChecklistPerguntaService,
    ChecklistPerguntaRelacionamentoService,
    DefeitoService,
    GrupoDefeitoService,
    SubgrupoDefeitoService,
    GrupoDefeitoCodigoService,
    EquipamentoService,
    TecnicoService,
  ],
})
export class AppModule {}
