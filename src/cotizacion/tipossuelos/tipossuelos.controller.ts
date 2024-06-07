import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipossuelosService } from './tipossuelos.service';
import { CreateTiposueloDto } from './dto/create-tiposuelo.dto';
import { UpdateTiposueloDto } from './dto/update-tiposuelo.dto';

@Controller('tipossuelos')
export class TipossuelosController {
  constructor(private readonly tipossuelosService: TipossuelosService) { }

  @Post()
  create(@Body() createTiposueloDto: CreateTiposueloDto) {
    return this.tipossuelosService.create(createTiposueloDto);
  }

  @Get()
  findAll() {
    return this.tipossuelosService.findAll();
  }
  @Get('portiposuelo/:tiposuelo')
  findAllPorNombTipoSuelo(@Param('tiposuelo') tiposuelo: string) {
    return this.tipossuelosService.findAllPorNombTipoSuelo(tiposuelo);
  }
  @Get('svc')
  findAllClear() {
    return this.tipossuelosService.findAllClear();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipossuelosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTiposueloDto: UpdateTiposueloDto) {
    return this.tipossuelosService.update(+id, updateTiposueloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipossuelosService.remove(+id);
  }
}
