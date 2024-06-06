import { Module } from '@nestjs/common';
import { CotizacionesService } from './cotizaciones.service';
import { CotizacionesController } from './cotizaciones.controller';
import { Cotizacion } from './entities/cotizacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Ciudadzona } from '../ciudadeszonas/entities/ciudadzona.entity';
import { CiudadeszonasModule } from '../ciudadeszonas/ciudadeszonas.module';
import { Nivelpiso } from '../nivelespisos/entities/nivelpiso.entity';
import { NivelespisosModule } from '../nivelespisos/nivelespisos.module';
import { Orientacion } from '../orientaciones/entities/orientacion.entity';
import { OrientacionesModule } from '../orientaciones/orientaciones.module';
import { Tipopared } from '../tiposparedes/entities/tipopared.entity';
import { TiposparedesModule } from '../tiposparedes/tiposparedes.module';
import { Tiposuelo } from '../tipossuelos/entities/tiposuelo.entity';
import { TipossuelosModule } from '../tipossuelos/tipossuelos.module';
import { Tipotecho } from '../tipostechos/entities/tipotecho.entity';
import { TipostechosModule } from '../tipostechos/tipostechos.module';
import { Tipovidrio } from '../tiposvidrios/entities/tipovidrio.entity';
import { TiposvidriosModule } from '../tiposvidrios/tiposvidrios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cotizacion, Ciudadzona, Nivelpiso, Orientacion, Tipopared, Tiposuelo, Tipotecho, Tipovidrio]), CiudadeszonasModule, NivelespisosModule, OrientacionesModule, TiposparedesModule, TipossuelosModule, TipostechosModule, TiposvidriosModule],
  controllers: [CotizacionesController],
  providers: [CotizacionesService],
  exports: [TypeOrmModule, CotizacionesService],
})
export class CotizacionesModule { }
