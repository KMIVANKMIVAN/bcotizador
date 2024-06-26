import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionesambientesController } from './cotizacionesambientes.controller';
import { CotizacionesambientesService } from './cotizacionesambientes.service';

describe('CotizacionesambientesController', () => {
  let controller: CotizacionesambientesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CotizacionesambientesController],
      providers: [CotizacionesambientesService],
    }).compile();

    controller = module.get<CotizacionesambientesController>(CotizacionesambientesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
