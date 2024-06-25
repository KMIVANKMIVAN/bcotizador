import { Module } from '@nestjs/common';
import { InstaltuberiasService } from './instaltuberias.service';
import { InstaltuberiasController } from './instaltuberias.controller';
import { Instaltuberia } from './entities/instaltuberia.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Instaltuberia])],
  controllers: [InstaltuberiasController],
  providers: [InstaltuberiasService],
  exports: [TypeOrmModule, InstaltuberiasService],
})
export class InstaltuberiasModule {}
