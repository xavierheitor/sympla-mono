import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { EquipamentoService } from '../service/equipamento.service';
import { EquipamentoController } from '../controller/equipamento.controller';

@Module({
  imports: [PrismaModule],
  controllers: [EquipamentoController],
  providers: [EquipamentoService],
  exports: [EquipamentoService],
})
export class EquipamentoModule {}
