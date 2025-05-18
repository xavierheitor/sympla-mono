import { Module } from '@nestjs/common';
import { AuthController } from '../controller/auth.controller';
import { MobileUsersModule } from 'src/modules/mobile-users/mobile-users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../strategy/jwt.strategy';
import { AuthService } from '../service/auth.service';

@Module({
  imports: [
    MobileUsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'sua-chave-secreta',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
