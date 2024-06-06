import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

import { Usuario } from './usuarios/entities/usuario.entity';
import { Rol } from './roles/entities/rol.entity';
import { Sucursal } from './sucursales/entities/sucursal.entity';
import { Empresa } from './empresa/empresas/entities/empresa.entity';
import { Unidad } from './empresa/unidades/entities/unidade.entity';
import { Cargo } from './empresa/cargos/entities/cargo.entity';
import { Direccion } from './empresa/direcciones/entities/direccion.entity';
import { Ciudad } from './ciudades/entities/ciudad.entity';
import { Ciudadzona } from './cotizacion/ciudadeszonas/entities/ciudadzona.entity';
import { Cotizacion } from './cotizacion/cotizaciones/entities/cotizacion.entity';
import { Nivelpiso } from './cotizacion/nivelespisos/entities/nivelpiso.entity';
import { Tipopared } from './cotizacion/tiposparedes/entities/tipopared.entity';
import { Tiposuelo } from './cotizacion/tipossuelos/entities/tiposuelo.entity';
import { Tipotecho } from './cotizacion/tipostechos/entities/tipotecho.entity';
import { Orientacion } from './cotizacion/orientaciones/entities/orientacion.entity';
import { Tipovidrio } from './cotizacion/tiposvidrios/entities/tipovidrio.entity';
import { Tipocotizacion } from './cotizacion/tiposcotizaciones/entities/tipocotizacion.entity';

import { AuthModule } from './auth/auth.module';
import { EmpresasModule } from './empresa/empresas/empresas.module';
import { DireccionesModule } from './empresa/direcciones/direcciones.module';
import { CargosModule } from './empresa/cargos/cargos.module';
import { UnidadesModule } from './empresa/unidades/unidades.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { RolesModule } from './roles/roles.module';
import { SucursalesModule } from './sucursales/sucursales.module';
import { SemillasModule } from './semillas/semillas.module';
import { CiudadesModule } from './ciudades/ciudades.module';
import { CiudadeszonasModule } from './cotizacion/ciudadeszonas/ciudadeszonas.module';
import { TiposparedesModule } from './cotizacion/tiposparedes/tiposparedes.module';
import { NivelespisosModule } from './cotizacion/nivelespisos/nivelespisos.module';
import { OrientacionesModule } from './cotizacion/orientaciones/orientaciones.module';
import { TiposvidriosModule } from './cotizacion/tiposvidrios/tiposvidrios.module';
import { TipostechosModule } from './cotizacion/tipostechos/tipostechos.module';
import { TipossuelosModule } from './cotizacion/tipossuelos/tipossuelos.module';
import { CotizacionesModule } from './cotizacion/cotizaciones/cotizaciones.module';
import { SemillacotizacionModule } from './semillacotizacion/semillacotizacion.module';
import { TiposcotizacionesModule } from './cotizacion/tiposcotizaciones/tiposcotizaciones.module';
import { PdfsModule } from './pdfs/pdfs.module';
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
    CiudadesModule,
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
        entities: [Usuario, Rol, Ciudad, Sucursal, Empresa, Unidad, Cargo, Direccion, Ciudadzona, Cotizacion, Nivelpiso, Tipopared, Tiposuelo, Tipotecho, Orientacion, Tipovidrio, Tipocotizacion],
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
    CiudadesModule,
    CiudadeszonasModule,
    TiposparedesModule,
    NivelespisosModule,
    OrientacionesModule,
    TiposvidriosModule,
    TipostechosModule,
    TipossuelosModule,
    CotizacionesModule,
    SemillacotizacionModule,
    TiposcotizacionesModule,
    PdfsModule,
  ],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },],
})
export class AppModule { }