import { Test, TestingModule } from '@nestjs/testing';
import { NivelespisosController } from './nivelespisos.controller';
import { NivelespisosService } from './nivelespisos.service';

describe('NivelespisosController', () => {
  let controller: NivelespisosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NivelespisosController],
      providers: [NivelespisosService],
    }).compile();

    controller = module.get<NivelespisosController>(NivelespisosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
