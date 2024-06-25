import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Radiadoresejes50cmService } from './radiadoresejes50cm.service';
import { CreateRadiadoreje50cmDto } from './dto/create-radiadoreje50cm.dto';
import { UpdateRadiadoreje50cmDto } from './dto/update-radiadoreje50cm.dto';

@Controller('radiadoresejes50cm')
export class Radiadoresejes50cmController {
  constructor(private readonly radiadoresejes50cmService: Radiadoresejes50cmService) { }

  @Post()
  create(@Body() createRadiadoreje50cmDto: CreateRadiadoreje50cmDto) {
    return this.radiadoresejes50cmService.create(createRadiadoreje50cmDto);
  }

  @Get()
  findAll() {
    return this.radiadoresejes50cmService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.radiadoresejes50cmService.findAllClear();
  }

  @Get('pormodelo/:modelo')
  findAllPorNombModelo(@Param('modelo') modelo: string) {
    return this.radiadoresejes50cmService.findAllPorNombModelo(modelo);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.radiadoresejes50cmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateRadiadoreje50cmDto: UpdateRadiadoreje50cmDto) {
    return this.radiadoresejes50cmService.update(+id, updateRadiadoreje50cmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.radiadoresejes50cmService.remove(+id);
  }
}
