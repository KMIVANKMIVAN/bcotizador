import { Test, TestingModule } from '@nestjs/testing';
import { Radiadoresejes50cmController } from './radiadoresejes50cm.controller';
import { Radiadoresejes50cmService } from './radiadoresejes50cm.service';

describe('Radiadoresejes50cmController', () => {
  let controller: Radiadoresejes50cmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Radiadoresejes50cmController],
      providers: [Radiadoresejes50cmService],
    }).compile();

    controller = module.get<Radiadoresejes50cmController>(Radiadoresejes50cmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
