import { Module } from '@nestjs/common';
import { CargosService } from './cargos.service';
import { CargosController } from './cargos.controller';
import { Cargo } from './entities/cargo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Unidad } from '../unidades/entities/unidade.entity';
import { UnidadesModule } from '../unidades/unidades.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cargo, Unidad]), UnidadesModule],
  controllers: [CargosController],
  providers: [CargosService],
  exports: [TypeOrmModule, CargosService],
})
export class CargosModule { }
