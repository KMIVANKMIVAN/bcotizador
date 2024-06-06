import { Module } from '@nestjs/common';
import { TiposcotizacionesService } from './tiposcotizaciones.service';
import { TiposcotizacionesController } from './tiposcotizaciones.controller';
import { Tipocotizacion } from './entities/tipocotizacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tipocotizacion])],
  controllers: [TiposcotizacionesController],
  providers: [TiposcotizacionesService],
  exports: [TypeOrmModule, TiposcotizacionesService],
})
export class TiposcotizacionesModule { }
