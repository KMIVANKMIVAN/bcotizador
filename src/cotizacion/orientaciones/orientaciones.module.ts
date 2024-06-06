import { Module } from '@nestjs/common';
import { OrientacionesService } from './orientaciones.service';
import { OrientacionesController } from './orientaciones.controller';
import { Orientacion } from './entities/orientacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Orientacion])],
  controllers: [OrientacionesController],
  providers: [OrientacionesService],
  exports: [TypeOrmModule, OrientacionesService],
})
export class OrientacionesModule { }
