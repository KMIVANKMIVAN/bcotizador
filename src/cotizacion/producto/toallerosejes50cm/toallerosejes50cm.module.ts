import { Module } from '@nestjs/common';
import { Toallerosejes50cmService } from './toallerosejes50cm.service';
import { Toallerosejes50cmController } from './toallerosejes50cm.controller';
import { Toalleroeje50cm } from './entities/toalleroeje50cm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Toalleroeje50cm])],
  controllers: [Toallerosejes50cmController],
  providers: [Toallerosejes50cmService],
  exports: [TypeOrmModule, Toallerosejes50cmService],
})
export class Toallerosejes50cmModule {}
