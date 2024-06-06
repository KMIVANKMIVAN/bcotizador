import { Module } from '@nestjs/common';
import { CiudadesService } from './ciudades.service';
import { CiudadesController } from './ciudades.controller';
import { Ciudad } from './entities/ciudad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Ciudad])],
  controllers: [CiudadesController],
  providers: [ CiudadesService],
  exports: [TypeOrmModule, CiudadesService],

})
export class CiudadesModule { }
