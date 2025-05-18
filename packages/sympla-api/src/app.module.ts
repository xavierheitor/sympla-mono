import { MiddlewareConsumer, Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/module/auth.module';
import { MobileUsersModule } from './modules/mobile-users/mobile-users.module';
import { AprModule } from './modules/apr/module/apr.module';
import { AtividadeModule } from './modules/atividade/module/atividade.module';
import { ChecklistModule } from './modules/checklist/module/checklist.module';
import { DefeitoModule } from './modules/defeito/module/defeito.module';
import { EquipamentoModule } from './modules/equipamento/module/equipamento.module';
import { TecnicoModule } from './modules/tecnico/module/tecnico.module';
import { LoggerMiddleware } from './utils/logger.middleware';

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
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
