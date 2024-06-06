import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotizacionesService } from './cotizaciones.service';
import { CreateCotizacionDto } from './dto/create-cotizacion.dto';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';

@Controller('cotizaciones')
export class CotizacionesController {
  constructor(private readonly cotizacionesService: CotizacionesService) { }

  @Post()
  create(@Body() createCotizacionDto: CreateCotizacionDto) {
    return this.cotizacionesService.create(createCotizacionDto);
  }

  @Get()
  findAll() {
    return this.cotizacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cotizacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCotizacionDto: UpdateCotizacionDto) {
    return this.cotizacionesService.update(+id, updateCotizacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cotizacionesService.remove(+id);
  }
}
