import { Module } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';
import { SucursalesController } from './sucursales.controller';
import { Sucursal } from './entities/sucursal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CiudadesModule } from 'src/ciudades/ciudades.module';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sucursal, Ciudad]), CiudadesModule],
  controllers: [SucursalesController],
  providers: [SucursalesService],
  exports: [TypeOrmModule, SucursalesService],
})
export class SucursalesModule { }
