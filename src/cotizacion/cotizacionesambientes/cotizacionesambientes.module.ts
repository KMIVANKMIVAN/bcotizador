import { Module } from '@nestjs/common';
import { CotizacionesambientesService } from './cotizacionesambientes.service';
import { CotizacionesambientesController } from './cotizacionesambientes.controller';
import { CotizacionesModule } from '../cotizaciones/cotizaciones.module';
import { Cotizacionambiente } from './entities/cotizacionambiente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cotizacion } from '../cotizaciones/entities/cotizacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cotizacionambiente, Cotizacion]), CotizacionesModule],
  controllers: [CotizacionesambientesController],
  providers: [CotizacionesambientesService],
  exports: [TypeOrmModule, CotizacionesambientesService],
})
export class CotizacionesambientesModule { }
