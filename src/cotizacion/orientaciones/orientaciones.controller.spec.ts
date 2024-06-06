import { Test, TestingModule } from '@nestjs/testing';
import { OrientacionesController } from './orientaciones.controller';
import { OrientacionesService } from './orientaciones.service';

describe('OrientacionesController', () => {
  let controller: OrientacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrientacionesController],
      providers: [OrientacionesService],
    }).compile();

    controller = module.get<OrientacionesController>(OrientacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
