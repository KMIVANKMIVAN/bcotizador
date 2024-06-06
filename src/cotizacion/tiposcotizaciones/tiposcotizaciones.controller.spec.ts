import { Test, TestingModule } from '@nestjs/testing';
import { TiposcotizacionesController } from './tiposcotizaciones.controller';
import { TiposcotizacionesService } from './tiposcotizaciones.service';

describe('TiposcotizacionesController', () => {
  let controller: TiposcotizacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposcotizacionesController],
      providers: [TiposcotizacionesService],
    }).compile();

    controller = module.get<TiposcotizacionesController>(TiposcotizacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
