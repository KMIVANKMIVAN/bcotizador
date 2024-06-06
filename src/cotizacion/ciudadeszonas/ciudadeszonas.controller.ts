import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CiudadeszonasService } from './ciudadeszonas.service';
import { CreateCiudadzonaDto } from './dto/create-ciudadzona.dto';
import { UpdateCiudadzonaDto } from './dto/update-ciudadzona.dto';

@Controller('ciudadeszonas')
export class CiudadeszonasController {
  constructor(private readonly ciudadeszonasService: CiudadeszonasService) { }

  @Post()
  create(@Body() createCiudadzonaDto: CreateCiudadzonaDto) {
    return this.ciudadeszonasService.create(createCiudadzonaDto);
  }

  @Get()
  findAll() {
    return this.ciudadeszonasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ciudadeszonasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCiudadzonaDto: UpdateCiudadzonaDto) {
    return this.ciudadeszonasService.update(+id, updateCiudadzonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ciudadeszonasService.remove(+id);
  }
}
