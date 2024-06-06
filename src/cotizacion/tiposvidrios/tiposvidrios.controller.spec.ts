import { Test, TestingModule } from '@nestjs/testing';
import { TiposvidriosController } from './tiposvidrios.controller';
import { TiposvidriosService } from './tiposvidrios.service';

describe('TiposvidriosController', () => {
  let controller: TiposvidriosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposvidriosController],
      providers: [TiposvidriosService],
    }).compile();

    controller = module.get<TiposvidriosController>(TiposvidriosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
