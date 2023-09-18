import { Module } from '@nestjs/common';
import { DonoService } from './dono.service';
import { DonoController } from './dono.controller';

@Module({
  controllers: [DonoController],
  providers: [DonoService],
})
export class DonoModule {}
