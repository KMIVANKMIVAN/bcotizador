import { Module } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { DireccionesController } from './direcciones.controller';
import { Direccion } from './entities/direccione.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpresasModule } from '../empresas/empresas.module';

import { Empresa } from '../empresas/entities/empresa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion,Empresa]), EmpresasModule, ],
  controllers: [DireccionesController],
  providers: [DireccionesService],
  exports: [TypeOrmModule, DireccionesService],
})
export class DireccionesModule { }
