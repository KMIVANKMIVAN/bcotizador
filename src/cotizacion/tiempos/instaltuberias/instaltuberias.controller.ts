import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstaltuberiasService } from './instaltuberias.service';
import { CreateInstaltuberiaDto } from './dto/create-instaltuberia.dto';
import { UpdateInstaltuberiaDto } from './dto/update-instaltuberia.dto';

@Controller('instaltuberias')
export class InstaltuberiasController {
  constructor(private readonly instaltuberiasService: InstaltuberiasService) {}

  @Post()
  create(@Body() createInstaltuberiaDto: CreateInstaltuberiaDto) {
    return this.instaltuberiasService.create(createInstaltuberiaDto);
  }

  @Get()
  findAll() {
    return this.instaltuberiasService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.instaltuberiasService.findAllClear();
  }

  @Get('porrango/:rango')
  findAllPorRango(@Param('rango') rango: number) {
    return this.instaltuberiasService.findAllPorRango(rango);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.instaltuberiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateInstaltuberiaDto: UpdateInstaltuberiaDto) {
    return this.instaltuberiasService.update(+id, updateInstaltuberiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.instaltuberiasService.remove(+id);
  }
}
