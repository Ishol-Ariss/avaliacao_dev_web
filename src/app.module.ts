import { Module } from '@nestjs/common';
import { PetModule } from './modules/pet/pet.module';
import { DonoModule } from './modules/dono/dono.module';

@Module({
  imports: [DonoModule, PetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
