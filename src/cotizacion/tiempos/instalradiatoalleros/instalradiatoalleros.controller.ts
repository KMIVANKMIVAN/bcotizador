import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InstalradiatoallerosService } from './instalradiatoalleros.service';
import { CreateInstalradiatoalleroDto } from './dto/create-instalradiatoallero.dto';
import { UpdateInstalradiatoalleroDto } from './dto/update-instalradiatoallero.dto';

@Controller('instalradiatoalleros')
export class InstalradiatoallerosController {
  constructor(private readonly instalradiatoallerosService: InstalradiatoallerosService) { }

  @Post()
  create(@Body() createInstalradiatoalleroDto: CreateInstalradiatoalleroDto) {
    return this.instalradiatoallerosService.create(createInstalradiatoalleroDto);
  }

  @Get()
  findAll() {
    return this.instalradiatoallerosService.findAll();
  }

  @Get('svc')
  findAllClear() {
    return this.instalradiatoallerosService.findAllClear();
  }

  @Get('pornroradiador/:nroradiador')
  findAllPorNroradiador(@Param('nroradiador') nroradiador: number) {
    return this.instalradiatoallerosService.findAllPorNroradiador(nroradiador);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.instalradiatoallerosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateInstalradiatoalleroDto: UpdateInstalradiatoalleroDto) {
    return this.instalradiatoallerosService.update(+id, updateInstalradiatoalleroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.instalradiatoallerosService.remove(+id);
  }
}
