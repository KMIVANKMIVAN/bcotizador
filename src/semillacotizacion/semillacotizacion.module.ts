import { Module } from '@nestjs/common';
import { SemillacotizacionService } from './semillacotizacion.service';
import { SemillacotizacionController } from './semillacotizacion.controller';

import { CiudadeszonasModule } from 'src/cotizacion/ciudadeszonas/ciudadeszonas.module';
import { NivelespisosModule } from 'src/cotizacion/nivelespisos/nivelespisos.module';
import { OrientacionesModule } from 'src/cotizacion/orientaciones/orientaciones.module';
import { TiposparedesModule } from 'src/cotizacion/tiposparedes/tiposparedes.module';
import { TipossuelosModule } from 'src/cotizacion/tipossuelos/tipossuelos.module';
import { TipostechosModule } from 'src/cotizacion/tipostechos/tipostechos.module';
import { TiposvidriosModule } from 'src/cotizacion/tiposvidrios/tiposvidrios.module';
import { TiposcotizacionesModule } from 'src/cotizacion/tiposcotizaciones/tiposcotizaciones.module';
import { FactoresviajesModule } from 'src/cotizacion/factoresviajes/factoresviajes.module';
import { GastospersonasModule } from 'src/cotizacion/gastospersonas/gastospersonas.module';
import { Toallerosejes50cmModule } from 'src/cotizacion/producto/toallerosejes50cm/toallerosejes50cm.module';
import { Radiadoresejes50cmModule } from 'src/cotizacion/producto/radiadoresejes50cm/radiadoresejes50cm.module';
import { InstalradiatoallerosModule } from 'src/cotizacion/tiempos/instalradiatoalleros/instalradiatoalleros.module';
import { InstaltuberiasModule } from 'src/cotizacion/tiempos/instaltuberias/instaltuberias.module';

@Module({
  imports: [
    CiudadeszonasModule,
    NivelespisosModule,
    OrientacionesModule,
    TiposparedesModule,
    TipossuelosModule,
    TipostechosModule,
    TiposvidriosModule,
    TiposcotizacionesModule,
    FactoresviajesModule,
    GastospersonasModule,
    Toallerosejes50cmModule,
    Radiadoresejes50cmModule,
    InstalradiatoallerosModule,
    InstaltuberiasModule
  ],
  controllers: [SemillacotizacionController],
  providers: [SemillacotizacionService],
})
export class SemillacotizacionModule { }
