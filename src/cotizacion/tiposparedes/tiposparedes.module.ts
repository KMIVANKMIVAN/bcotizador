import { Module } from '@nestjs/common';
import { TiposparedesService } from './tiposparedes.service';
import { TiposparedesController } from './tiposparedes.controller';
import { Tipopared } from './entities/tipopared.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tipopared])],
  controllers: [TiposparedesController],
  providers: [TiposparedesService],
  exports: [TypeOrmModule, TiposparedesService],
})
export class TiposparedesModule { }
