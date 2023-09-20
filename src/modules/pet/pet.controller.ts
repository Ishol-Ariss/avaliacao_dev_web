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
    @Get('one/:id')
    async get(@Param('id') id: string){
      return this.petService.getById(id)
    }
    @Get('all')
    async getAll(){
      return this.petService.getAll()
    }
    @Delete(':id')
    async delete(@Param('id') id: string){
      return this.petService.deleteById(id)
    }
    @Put(':id')
    async update(@Param('id') id: string, @Body() data: PetDto) {
      return this.petService.update(id, data)
    }
}
