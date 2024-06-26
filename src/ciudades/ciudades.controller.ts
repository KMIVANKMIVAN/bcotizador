import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
// import { Roles } from 'src/auth/roles.decorator';
// import { RolesGuard } from 'src/auth/roles.guard';
@Controller('ciudades')
export class CiudadesController {
  constructor(private readonly ciudadesService: CiudadesService) { }

  @Post()
  create(@Body() createCiudadDto: CreateCiudadDto) {
    return this.ciudadesService.create(createCiudadDto);
  }

  @Get()
  // @Roles(1)
  findAll() {
    return this.ciudadesService.findAll();
  }
  @Get('porciudad/:ciudad')
  findAllPorNombCiudad(@Param('ciudad') ciudad: string) {
    return this.ciudadesService.findAllPorNombCiudad(ciudad);
  }
  @Get('svc')
  findAllClear() {
    return this.ciudadesService.findAllClear();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ciudadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCiudadDto: UpdateCiudadDto) {
    return this.ciudadesService.update(+id, updateCiudadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ciudadesService.remove(+id);
  }
}
