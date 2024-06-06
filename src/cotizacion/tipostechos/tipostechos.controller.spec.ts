import { Test, TestingModule } from '@nestjs/testing';
import { TipostechosController } from './tipostechos.controller';
import { TipostechosService } from './tipostechos.service';

describe('TipostechosController', () => {
  let controller: TipostechosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipostechosController],
      providers: [TipostechosService],
    }).compile();

    controller = module.get<TipostechosController>(TipostechosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
