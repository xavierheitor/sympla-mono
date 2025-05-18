import { Module } from '@nestjs/common';
import { MobileUsersService } from './mobile-users.service';

@Module({
  providers: [MobileUsersService],
  exports: [MobileUsersService],
})
export class MobileUsersModule {}
