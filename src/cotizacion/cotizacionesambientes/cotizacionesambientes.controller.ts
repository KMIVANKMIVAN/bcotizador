import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CotizacionesambientesService } from './cotizacionesambientes.service';
import { CreateCotizacionambienteDto } from './dto/create-cotizacionambiente.dto';
import { UpdateCotizacionambienteDto } from './dto/update-cotizacionambiente.dto';

@Controller('cotizacionesambientes')
export class CotizacionesambientesController {
  constructor(private readonly cotizacionesambientesService: CotizacionesambientesService) { }

  @Post()
  create(@Body() createCotizacionambienteDto: CreateCotizacionambienteDto) {
    return this.cotizacionesambientesService.create(createCotizacionambienteDto);
  }

  @Get()
  findAll() {
    return this.cotizacionesambientesService.findAll();
  }
  @Get("idcotizacion/:id")
  findAllPorCotizacion(@Param('id') id: number) {
    return this.cotizacionesambientesService.findAllPorCotizacion(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.cotizacionesambientesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCotizacionambienteDto: UpdateCotizacionambienteDto) {
    return this.cotizacionesambientesService.update(+id, updateCotizacionambienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.cotizacionesambientesService.remove(+id);
  }
}
