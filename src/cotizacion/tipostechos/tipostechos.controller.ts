import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipostechosService } from './tipostechos.service';
import { CreateTipotechoDto } from './dto/create-tipotecho.dto';
import { UpdateTipotechoDto } from './dto/update-tipotecho.dto';

@Controller('tipostechos')
export class TipostechosController {
  constructor(private readonly tipostechosService: TipostechosService) { }

  @Post()
  create(@Body() createTipotechoDto: CreateTipotechoDto) {
    return this.tipostechosService.create(createTipotechoDto);
  }

  @Get()
  findAll() {
    return this.tipostechosService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.tipostechosService.findAllClear();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipostechosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipotechoDto: UpdateTipotechoDto) {
    return this.tipostechosService.update(+id, updateTipotechoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipostechosService.remove(+id);
  }
}
