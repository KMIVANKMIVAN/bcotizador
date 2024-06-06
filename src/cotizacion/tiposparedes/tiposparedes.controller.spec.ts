import { Test, TestingModule } from '@nestjs/testing';
import { TiposparedesController } from './tiposparedes.controller';
import { TiposparedesService } from './tiposparedes.service';

describe('TiposparedesController', () => {
  let controller: TiposparedesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposparedesController],
      providers: [TiposparedesService],
    }).compile();

    controller = module.get<TiposparedesController>(TiposparedesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
