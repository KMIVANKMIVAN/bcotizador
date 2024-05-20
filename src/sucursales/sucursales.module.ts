import { Module } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';
import { SucursalesController } from './sucursales.controller';
import { Sucursal } from './entities/sucursale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartamentosModule } from '../departamentos/departamentos.module';

import { Departamento } from 'src/departamentos/entities/departamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sucursal, Departamento]), DepartamentosModule],
  controllers: [SucursalesController],
  providers: [SucursalesService],
  exports: [TypeOrmModule, SucursalesService],
})
export class SucursalesModule { }
