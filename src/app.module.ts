import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

import { Usuario } from './usuarios/entities/usuario.entity';
import { Rol } from './roles/entities/role.entity';
import { Departamento } from './departamentos/entities/departamento.entity';
import { Sucursal } from './sucursales/entities/sucursale.entity';
import { Empresa } from './empresa/empresas/entities/empresa.entity';
import { Unidad } from './empresa/unidades/entities/unidade.entity';
import { Cargo } from './empresa/cargos/entities/cargo.entity';
import { Direccion } from './empresa/direcciones/entities/direccione.entity';


import { AuthModule } from './auth/auth.module';
import { EmpresasModule } from './empresa/empresas/empresas.module';
import { DireccionesModule } from './empresa/direcciones/direcciones.module';
import { CargosModule } from './empresa/cargos/cargos.module';
import { UnidadesModule } from './empresa/unidades/unidades.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { DepartamentosModule } from './departamentos/departamentos.module';
import { SucursalesModule } from './sucursales/sucursales.module';
import { SemillasModule } from './semillas/semillas.module';

const bdType = 'postgres'
// const bdType= 'mysql'

@Module({
  controllers: [AppController],
  /* providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },], */
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.developer',
    }),
    UsuariosModule,
    RolesModule,
    DepartamentosModule,
    SucursalesModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: bdType,
        host: configService.get<string>('BDHOST'),
        port: configService.get<number>('BDPORT'),
        username: configService.get<string>('BDUSERNAME'),
        password: configService.get<string>('BDPASSWORD'),
        database: configService.get<string>('BDDATABASE'),
        entities: [Usuario, Rol, Departamento, Sucursal, Empresa, Unidad, Cargo, Direccion],
        synchronize: true, // Utilizar 'false' en producción
      }),
      inject: [ConfigService], // Correctamente ubicado dentro de TypeOrmModule.forRootAsync
    }),
    SemillasModule,
    AuthModule,
    EmpresasModule,
    DireccionesModule,
    CargosModule,
    UnidadesModule,
  ],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule { }