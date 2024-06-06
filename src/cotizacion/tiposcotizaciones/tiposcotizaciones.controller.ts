import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposcotizacionesService } from './tiposcotizaciones.service';
import { CreateTipocotizacionDto } from './dto/create-tipocotizacion.dto';
import { UpdateTipocotizacionDto } from './dto/update-tipocotizacion.dto';

@Controller('tiposcotizaciones')
export class TiposcotizacionesController {
  constructor(private readonly tiposcotizacionesService: TiposcotizacionesService) { }

  @Post()
  create(@Body() createTipocotizacionDto: CreateTipocotizacionDto) {
    return this.tiposcotizacionesService.create(createTipocotizacionDto);
  }

  @Get()
  findAll() {
    return this.tiposcotizacionesService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.tiposcotizacionesService.findAllClear();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tiposcotizacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipocotizacionDto: UpdateTipocotizacionDto) {
    return this.tiposcotizacionesService.update(+id, updateTipocotizacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiposcotizacionesService.remove(+id);
  }
}
