import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SucursalesService } from './sucursales.service';
import { CreateSucursaleDto } from './dto/create-sucursal.dto';
import { UpdateSucursaleDto } from './dto/update-sucursal.dto';

@Controller('sucursales')
export class SucursalesController {
  constructor(private readonly sucursalesService: SucursalesService) { }


  @Post()
  create(@Body() createSucursaleDto: CreateSucursaleDto) {
    return this.sucursalesService.create(createSucursaleDto);
  }


  @Get()
  findAll() {
    return this.sucursalesService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sucursalesService.findOne(+id);
  }


  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateSucursaleDto: UpdateSucursaleDto,
  ) {
    return this.sucursalesService.update(+id, updateSucursaleDto);
  }


  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sucursalesService.remove(+id);
  }
}
