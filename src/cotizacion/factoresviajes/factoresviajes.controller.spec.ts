import { Test, TestingModule } from '@nestjs/testing';
import { FactoresviajesController } from './factoresviajes.controller';
import { FactoresviajesService } from './factoresviajes.service';

describe('FactoresviajesController', () => {
  let controller: FactoresviajesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FactoresviajesController],
      providers: [FactoresviajesService],
    }).compile();

    controller = module.get<FactoresviajesController>(FactoresviajesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
