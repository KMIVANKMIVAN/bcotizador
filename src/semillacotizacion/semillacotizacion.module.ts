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

@Module({
  imports: [
    CiudadeszonasModule,
    NivelespisosModule,
    OrientacionesModule,
    TiposparedesModule,
    TipossuelosModule,
    TipostechosModule,
    TiposvidriosModule,
  ],
  controllers: [SemillacotizacionController],
  providers: [SemillacotizacionService],
})
export class SemillacotizacionModule { }
