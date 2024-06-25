import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Toallerosejes50cmService } from './toallerosejes50cm.service';
import { CreateToalleroeje50cmDto } from './dto/create-toalleroeje50cm.dto';
import { UpdateToalleroeje50cmDto } from './dto/update-toalleroeje50cm.dto';

@Controller('toallerosejes50cm')
export class Toallerosejes50cmController {
  constructor(private readonly toallerosejes50cmService: Toallerosejes50cmService) { }

  @Post()
  create(@Body() createToalleroeje50cmDto: CreateToalleroeje50cmDto) {
    return this.toallerosejes50cmService.create(createToalleroeje50cmDto);
  }

  @Get()
  findAll() {
    return this.toallerosejes50cmService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.toallerosejes50cmService.findAllClear();
  }

  @Get('pormodelo/:modelo')
  findAllPorNombModelo(@Param('modelo') modelo: string) {
    return this.toallerosejes50cmService.findAllPorNombModelo(modelo);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.toallerosejes50cmService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateToalleroeje50cmDto: UpdateToalleroeje50cmDto) {
    return this.toallerosejes50cmService.update(+id, updateToalleroeje50cmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.toallerosejes50cmService.remove(+id);
  }
}
