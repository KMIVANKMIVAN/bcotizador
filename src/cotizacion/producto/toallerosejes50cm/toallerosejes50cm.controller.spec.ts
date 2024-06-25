import { Test, TestingModule } from '@nestjs/testing';
import { Toallerosejes50cmController } from './toallerosejes50cm.controller';
import { Toallerosejes50cmService } from './toallerosejes50cm.service';

describe('Toallerosejes50cmController', () => {
  let controller: Toallerosejes50cmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Toallerosejes50cmController],
      providers: [Toallerosejes50cmService],
    }).compile();

    controller = module.get<Toallerosejes50cmController>(Toallerosejes50cmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
