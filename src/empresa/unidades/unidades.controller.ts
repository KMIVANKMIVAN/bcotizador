import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Post()
  create(@Body() createUnidadeDto: CreateUnidadeDto) {
    return this.unidadesService.create(createUnidadeDto);
  }
  @Get('porunidad/:unidad')
  findAllPorNombUnidad(@Param('unidad') unidad: string) {
    return this.unidadesService.findAllPorNombUnidad(unidad);
  }
  @Get()
  findAll() {
    return this.unidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.unidadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUnidadeDto: UpdateUnidadeDto) {
    return this.unidadesService.update(+id, updateUnidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.unidadesService.remove(+id);
  }
}
