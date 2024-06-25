import { Module } from '@nestjs/common';
import { FactoresviajesService } from './factoresviajes.service';
import { FactoresviajesController } from './factoresviajes.controller';
import { Factorviaje } from './entities/factorviaje.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Factorviaje])],
  controllers: [FactoresviajesController],
  providers: [FactoresviajesService],
  exports: [TypeOrmModule, FactoresviajesService],
})
export class FactoresviajesModule {}
