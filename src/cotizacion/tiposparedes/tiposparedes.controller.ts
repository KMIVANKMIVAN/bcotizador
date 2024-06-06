import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposparedesService } from './tiposparedes.service';
import { CreateTipoparedDto } from './dto/create-tipopared.dto';
import { UpdateTipoparedDto } from './dto/update-tipopared.dto';

@Controller('tiposparedes')
export class TiposparedesController {
  constructor(private readonly tiposparedesService: TiposparedesService) { }

  @Post()
  create(@Body() createTipoparedDto: CreateTipoparedDto) {
    return this.tiposparedesService.create(createTipoparedDto);
  }

  @Get()
  findAll() {
    return this.tiposparedesService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.tiposparedesService.findAllClear();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tiposparedesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTipoparedDto: UpdateTipoparedDto) {
    return this.tiposparedesService.update(+id, updateTipoparedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tiposparedesService.remove(+id);
  }
}
