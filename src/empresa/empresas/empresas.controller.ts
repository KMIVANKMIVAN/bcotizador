import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresas')
export class EmpresasController {
  constructor(private readonly empresasService: EmpresasService) { }

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresasService.create(createEmpresaDto);
  }

  @Get()
  findAll() {
    return this.empresasService.findAll();
  }
  @Get('porempresa/:empresa')
  findAllPorNombEmpresa(@Param('empresa') empresa: string) {
    return this.empresasService.findAllPorNombEmpresa(empresa);
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.empresasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresasService.update(+id, updateEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.empresasService.remove(+id);
  }
}
