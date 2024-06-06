import { Test, TestingModule } from '@nestjs/testing';
import { SemillacotizacionController } from './semillacotizacion.controller';
import { SemillacotizacionService } from './semillacotizacion.service';

describe('SemillacotizacionController', () => {
  let controller: SemillacotizacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SemillacotizacionController],
      providers: [SemillacotizacionService],
    }).compile();

    controller = module.get<SemillacotizacionController>(SemillacotizacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
