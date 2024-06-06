import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrientacionesService } from './orientaciones.service';
import { CreateOrientacionDto } from './dto/create-orientacion.dto';
import { UpdateOrientacionDto } from './dto/update-orientacion.dto';

@Controller('orientaciones')
export class OrientacionesController {
  constructor(private readonly orientacionesService: OrientacionesService) { }

  @Post()
  create(@Body() createOrientacionDto: CreateOrientacionDto) {
    return this.orientacionesService.create(createOrientacionDto);
  }

  @Get()
  findAll() {
    return this.orientacionesService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.orientacionesService.findAllClear();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.orientacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateOrientacionDto: UpdateOrientacionDto) {
    return this.orientacionesService.update(+id, updateOrientacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orientacionesService.remove(+id);
  }
}
