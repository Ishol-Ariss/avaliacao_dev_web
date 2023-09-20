import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [PetController],
  providers: [PetService, PrismaService],
})
export class PetModule {}
