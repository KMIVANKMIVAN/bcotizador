import { Module } from '@nestjs/common';
import { InstalradiatoallerosService } from './instalradiatoalleros.service';
import { InstalradiatoallerosController } from './instalradiatoalleros.controller';
import { Instalradiatoallero } from './entities/instalradiatoallero.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Instalradiatoallero])],
  controllers: [InstalradiatoallerosController],
  providers: [InstalradiatoallerosService],
  exports: [TypeOrmModule, InstalradiatoallerosService],
})
export class InstalradiatoallerosModule { }
