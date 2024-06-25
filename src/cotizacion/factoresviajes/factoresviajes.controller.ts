import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FactoresviajesService } from './factoresviajes.service';
import { CreateFactorviajeDto } from './dto/create-factorviaje.dto';
import { UpdateFactorviajeDto } from './dto/update-factorviaje.dto';

@Controller('factoresviajes')
export class FactoresviajesController {
  constructor(private readonly factoresviajesService: FactoresviajesService) { }

  @Post()
  create(@Body() createFactorviajeDto: CreateFactorviajeDto) {
    return this.factoresviajesService.create(createFactorviajeDto);
  }

  @Get()
  findAll() {
    return this.factoresviajesService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.factoresviajesService.findAllClear();
  }

  @Get('porciudad/:ciudad')
  findAllPorNombCiudad(@Param('ciudad') ciudad: string) {
    return this.factoresviajesService.findAllPorNombCiudad(ciudad);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.factoresviajesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateFactorviajeDto: UpdateFactorviajeDto) {
    return this.factoresviajesService.update(+id, updateFactorviajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.factoresviajesService.remove(+id);
  }
}
