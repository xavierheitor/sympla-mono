import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TestModule } from './test/test.module';
import { AuthModule } from './auth/auth.module';
import { MobileUsersModule } from './mobile-users/mobile-users.module';

@Module({
  imports: [PrismaModule, TestModule, AuthModule, MobileUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
