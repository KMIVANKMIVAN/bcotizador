import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { CreateDireccioneDto } from './dto/create-direccion.dto';
import { UpdateDireccioneDto } from './dto/update-direccion.dto';

@Controller('direcciones')
export class DireccionesController {
  constructor(private readonly direccionesService: DireccionesService) { }

  @Post()
  create(@Body() createDireccioneDto: CreateDireccioneDto) {
    return this.direccionesService.create(createDireccioneDto);
  }
  @Get('pordireccion/:direccion')
  findAllPorNombDireccion(@Param('direccion') direccion: string) {
    return this.direccionesService.findAllPorNombDireccion(direccion);
  }
  @Get()
  findAll() {
    return this.direccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.direccionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDireccioneDto: UpdateDireccioneDto) {
    return this.direccionesService.update(+id, updateDireccioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.direccionesService.remove(+id);
  }
}
