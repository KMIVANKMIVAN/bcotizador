import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GastospersonasService } from './gastospersonas.service';
import { CreateGastopersonaDto } from './dto/create-gastopersona.dto';
import { UpdateGastopersonaDto } from './dto/update-gastopersona.dto';

@Controller('gastospersonas')
export class GastospersonasController {
  constructor(private readonly gastospersonasService: GastospersonasService) { }

  @Post()
  create(@Body() createGastospersonaDto: CreateGastopersonaDto) {
    return this.gastospersonasService.create(createGastospersonaDto);
  }

  @Get()
  findAll() {
    return this.gastospersonasService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.gastospersonasService.findAllClear();
  }

  @Get('pornropersona/:nropersona')
  findAllPorNombNivelPiso(@Param('nropersona') nropersona: number) {
    return this.gastospersonasService.findAllPorNroPersona(nropersona);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gastospersonasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGastospersonaDto: UpdateGastopersonaDto) {
    return this.gastospersonasService.update(+id, updateGastospersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gastospersonasService.remove(+id);
  }
}
