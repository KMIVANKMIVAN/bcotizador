import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SucursalesModule } from '../sucursales/sucursales.module';
import { RolesModule } from '../roles/roles.module';
import { CargosModule } from 'src/empresa/cargos/cargos.module';

import { Rol } from 'src/roles/entities/role.entity';
import { Sucursal } from 'src/sucursales/entities/sucursale.entity';
import { Cargo } from 'src/empresa/cargos/entities/cargo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Rol, Sucursal, Cargo]), SucursalesModule, RolesModule, CargosModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [TypeOrmModule, UsuariosService],
})
export class UsuariosModule { }
