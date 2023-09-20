import { Controller, Post, Get, Delete, Put, Param, Body } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetDto } from './pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
    async create(@Body() data: PetDto) {
      return this.petService.create(data)
    }
    @Get('one/:cpf')
    async get(@Param('cpf') cpf: string){
      return this.petService.getByCpf(cpf)
    }
    @Get('all')
    async getAll(){
      return this.petService.getAll()
    }
    @Delete(':cpf')
    async delete(@Param('cpf') cpf: string){
      return this.petService.deleteByCpf(cpf)
    }
    @Put(':cpf')
    async update(@Param('cpf') cpf: string, @Body() data: PetDto) {
      return this.petService.update(cpf, data)
    }
}
