import { Test, TestingModule } from '@nestjs/testing';
import { TipossuelosController } from './tipossuelos.controller';
import { TipossuelosService } from './tipossuelos.service';

describe('TipossuelosController', () => {
  let controller: TipossuelosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipossuelosController],
      providers: [TipossuelosService],
    }).compile();

    controller = module.get<TipossuelosController>(TipossuelosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
