import { Module } from '@nestjs/common';
import { TipossuelosService } from './tipossuelos.service';
import { TipossuelosController } from './tipossuelos.controller';
import { Tiposuelo } from './entities/tiposuelo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tiposuelo])],
  controllers: [TipossuelosController],
  providers: [TipossuelosService],
  exports: [TypeOrmModule, TipossuelosService],
})
export class TipossuelosModule { }
