import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MobileUsersModule } from 'src/mobile-users/mobile-users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MobileUsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'sua-chave-secreta',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
