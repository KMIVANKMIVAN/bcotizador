import { Module } from '@nestjs/common';
import { SemillasService } from './semillas.service';
import { SemillasController } from './semillas.controller';

import { DepartamentosModule } from '../departamentos/departamentos.module';
import { RolesModule } from '../roles/roles.module';
import { SucursalesModule } from '../sucursales/sucursales.module';
import { UsuariosModule } from '../usuarios/usuarios.module';

import { CargosModule } from 'src/empresa/cargos/cargos.module';
import { UnidadesModule } from 'src/empresa/unidades/unidades.module';
import { DireccionesModule } from 'src/empresa/direcciones/direcciones.module';
import { EmpresasModule } from 'src/empresa/empresas/empresas.module';

@Module({
  imports: [
    DepartamentosModule,
    RolesModule,
    SucursalesModule,
    UsuariosModule,
    CargosModule,
    UnidadesModule,
    DireccionesModule,
    EmpresasModule
  ],
  controllers: [SemillasController],
  providers: [SemillasService],
})
export class SemillasModule { }
