import { Module } from '@nestjs/common';
import { CiudadeszonasService } from './ciudadeszonas.service';
import { CiudadeszonasController } from './ciudadeszonas.controller';
import { Ciudadzona } from './entities/ciudadzona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CiudadesModule } from 'src/ciudades/ciudades.module';
import { Ciudad } from 'src/ciudades/entities/ciudad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudadzona, Ciudad]), CiudadesModule],
  controllers: [CiudadeszonasController],
  providers: [CiudadeszonasService],
  exports: [TypeOrmModule, CiudadeszonasService],
})
export class CiudadeszonasModule { }
