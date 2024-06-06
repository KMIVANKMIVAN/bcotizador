import { Module } from '@nestjs/common';
import { NivelespisosService } from './nivelespisos.service';
import { NivelespisosController } from './nivelespisos.controller';
import { Nivelpiso } from './entities/nivelpiso.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Nivelpiso])],
  controllers: [NivelespisosController],
  providers: [NivelespisosService],
  exports: [TypeOrmModule, NivelespisosService],
})
export class NivelespisosModule { }
