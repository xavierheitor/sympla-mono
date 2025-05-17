import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { MobileUsersModule } from './mobile-users/mobile-users.module';
import { AprModule } from './apr/module/apr.module';
import { AprController } from './apr/controller/apr.controller';
import { AprService } from './apr/service/apr.service';
import { AprPerguntasService } from './apr/service/aprPerguntas.service';
import { AprPerguntasRelacionamentoService } from './apr/service/aprPerguntasRelacionamento.service';
import { AtividadeController } from './atividade/controller/atividade.controller';
import { AtividadeModule } from './atividade/module/atividade.module';
import { TipoAtividadeService } from './atividade/service/tipoAtividade.service';
import { ChecklistModule } from './checklist/module/checklist.module';
import { ChecklistController } from './checklist/controller/checklist.controller';
import { ChecklistService } from './checklist/service/checklist.service';
import { ChecklistPerguntaService } from './checklist/service/checklistPergunta.service';
import { ChecklistPerguntaRelacionamentoService } from './checklist/service/checklistPerguntaRelacionamento.service';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    MobileUsersModule,
    AprModule,
    AtividadeModule,
    ChecklistModule,
  ],
  controllers: [
    AppController,
    AprController,
    AtividadeController,
    ChecklistController,
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
  ],
})
export class AppModule {}
