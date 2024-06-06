import { Module } from '@nestjs/common';
import { TiposvidriosService } from './tiposvidrios.service';
import { TiposvidriosController } from './tiposvidrios.controller';
import { Tipovidrio } from './entities/tipovidrio.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tipovidrio])],
  controllers: [TiposvidriosController],
  providers: [TiposvidriosService],
  exports: [TypeOrmModule, TiposvidriosService],
})
export class TiposvidriosModule { }
