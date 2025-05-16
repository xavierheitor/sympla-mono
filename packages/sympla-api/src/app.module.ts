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

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    MobileUsersModule,
    AprModule,
    AtividadeModule,
  ],
  controllers: [AppController, AprController, AtividadeController],
  providers: [
    AppService,
    AprService,
    AprPerguntasService,
    AprPerguntasRelacionamentoService,
    TipoAtividadeService,
  ],
})
export class AppModule {}
