import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposvidriosService } from './tiposvidrios.service';
import { CreateTipovidrioDto } from './dto/create-tipovidrio.dto';
import { UpdateTipovidrioDto } from './dto/update-tipovidrio.dto';

@Controller('tiposvidrios')
export class TiposvidriosController {
  constructor(private readonly tiposvidriosService: TiposvidriosService) { }

  @Post()
  create(@Body() createTipovidrioDto: CreateTipovidrioDto) {
    return this.tiposvidriosService.create(createTipovidrioDto);
  }

  @Get()
  findAll() {
    return this.tiposvidriosService.findAll();
  }
  @Get('portipovidrio/:tipovidrio')
  findAllPorNombTipoVidrio(@Param('tipovidrio') tipovidrio: string) {
    return this.tiposvidriosService.findAllPorNombTipoVidrio(tipovidrio);
  }
  @Get('svc')
  findAllClear() {
    return this.tiposvidriosService.findAllClear();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tiposvidriosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipovidrioDto: UpdateTipovidrioDto) {
    return this.tiposvidriosService.update(+id, updateTipovidrioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiposvidriosService.remove(+id);
  }
}
