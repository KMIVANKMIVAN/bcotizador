import { Module } from '@nestjs/common';
import { CotizacionesambientesService } from './cotizacionesambientes.service';
import { CotizacionesambientesController } from './cotizacionesambientes.controller';
import { CotizacionesModule } from '../cotizaciones/cotizaciones.module';
import { Cotizacionambiente } from './entities/cotizacionambiente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cotizacionambiente,]), CotizacionesModule],
  controllers: [CotizacionesambientesController],
  providers: [CotizacionesambientesService],
  exports: [TypeOrmModule, CotizacionesambientesService],
})
export class CotizacionesambientesModule { }
