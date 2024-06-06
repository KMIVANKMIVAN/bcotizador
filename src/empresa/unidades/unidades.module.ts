import { Module } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { UnidadesController } from './unidades.controller';
import { Unidad } from './entities/unidade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Direccion } from '../direcciones/entities/direccion.entity';
import { DireccionesModule } from '../direcciones/direcciones.module';

@Module({
  imports: [TypeOrmModule.forFeature([Unidad, Direccion]), DireccionesModule],
  controllers: [UnidadesController],
  providers: [UnidadesService],
  exports: [TypeOrmModule, UnidadesService],
})
export class UnidadesModule { }
