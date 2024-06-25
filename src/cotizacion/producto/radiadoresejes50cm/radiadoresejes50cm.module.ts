import { Module } from '@nestjs/common';
import { Radiadoresejes50cmService } from './radiadoresejes50cm.service';
import { Radiadoresejes50cmController } from './radiadoresejes50cm.controller';
import { Radiadoreje50cm } from './entities/radiadoreje50cm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Radiadoreje50cm])],
  controllers: [Radiadoresejes50cmController],
  providers: [Radiadoresejes50cmService],
  exports: [TypeOrmModule, Radiadoresejes50cmService],
})
export class Radiadoresejes50cmModule { }
