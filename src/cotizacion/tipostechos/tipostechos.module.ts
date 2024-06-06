import { Module } from '@nestjs/common';
import { TipostechosService } from './tipostechos.service';
import { TipostechosController } from './tipostechos.controller';
import { Tipotecho } from './entities/tipotecho.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tipotecho])],
  controllers: [TipostechosController],
  providers: [TipostechosService],
  exports: [TypeOrmModule, TipostechosService],
})
export class TipostechosModule {}
