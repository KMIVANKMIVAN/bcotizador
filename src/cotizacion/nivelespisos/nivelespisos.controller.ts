import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NivelespisosService } from './nivelespisos.service';
import { CreateNivelpisoDto } from './dto/create-nivelpiso.dto';
import { UpdateNivelpisoDto } from './dto/update-nivelpiso.dto';

@Controller('nivelespisos')
export class NivelespisosController {
  constructor(private readonly nivelespisosService: NivelespisosService) { }

  @Post()
  create(@Body() createNivelpisoDto: CreateNivelpisoDto) {
    return this.nivelespisosService.create(createNivelpisoDto);
  }

  @Get()
  findAll() {
    return this.nivelespisosService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.nivelespisosService.findAllClear();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.nivelespisosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateNivelpisoDto: UpdateNivelpisoDto) {
    return this.nivelespisosService.update(+id, updateNivelpisoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.nivelespisosService.remove(+id);
  }
}
