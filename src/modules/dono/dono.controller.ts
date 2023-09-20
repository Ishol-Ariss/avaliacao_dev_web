import { Controller, Post, Get, Delete, Put, Body, Param } from '@nestjs/common';
import { DonoService } from './dono.service';
import { DonoDTO } from './Dono.dto';

@Controller('dono')
export class DonoController {
  constructor(private readonly donoService: DonoService) {}

  @Post()
  async create(@Body() data: DonoDTO) {
    return this.donoService.create(data)
  }
  @Get('one/:cpf')
  async get(@Param('cpf') cpf: string){
    return this.donoService.getByCpf(cpf)
  }
  @Get('all')
  async getAll(){
    return this.donoService.getAll()
  }
  @Delete(':cpf')
  async delete(@Param('cpf') cpf: string){
    return this.donoService.deleteByCpf(cpf)
  }
  @Put(':cpf')
  async update(@Param('cpf') cpf: string, @Body() data: DonoDTO) {
    return this.donoService.update(cpf, data)
  }
}
