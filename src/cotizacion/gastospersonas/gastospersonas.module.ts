import { Module } from '@nestjs/common';
import { GastospersonasService } from './gastospersonas.service';
import { GastospersonasController } from './gastospersonas.controller';
import { Gastopersona } from './entities/gastopersona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Gastopersona])],
  controllers: [GastospersonasController],
  providers: [GastospersonasService],
  exports: [TypeOrmModule, GastospersonasService],
})
export class GastospersonasModule { }
