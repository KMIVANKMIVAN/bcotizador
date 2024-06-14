import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) { }

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }
  @Get('pornomci/:nomci')
  findAllPorNombCi(@Param('nomci') nomci: string) {
    return this.usuariosService.findAllPorNombCi(nomci);
  }
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usuariosService.findOne(+id);
  }

  @Get('buscarnomci/:nomci')
  findOneCi(@Param('nomci') nomci: string) {
    return this.usuariosService.findOneCi(nomci);
  }

  @Get('buscarci/:ci')
  findOneByUserCi(@Param('ci') ci: string) {
    return this.usuariosService.findOneByUserCi(ci);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }
  @Patch('resetcontra/:id')
  resetearContrasenia(@Param('id') id: number) {
    return this.usuariosService.resetearContrasenia(+id);
  }
  @Patch('actestado/:id')
  async updateEstado(@Param('id') id: number, @Body() body: { es_activo: boolean }) {
    return this.usuariosService.updateEstado(+id, body);
  }
  @Patch('updatepw/:id')
  updateContrasenia(
    @Param('id') id: number,
    @Body('contraseniaAntigua') contraseniaAntigua: string, // Nuevo parámetro
    @Body() updateUsuarioDto: UpdateUsuarioDto,
  ) {
    return this.usuariosService.updateContrasenia(
      id,
      contraseniaAntigua,
      updateUsuarioDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usuariosService.remove(+id);
  }
}
