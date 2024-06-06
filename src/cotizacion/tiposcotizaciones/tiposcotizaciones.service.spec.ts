import { Test, TestingModule } from '@nestjs/testing';
import { TiposcotizacionesService } from './tiposcotizaciones.service';

describe('TiposcotizacionesService', () => {
  let service: TiposcotizacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposcotizacionesService],
    }).compile();

    service = module.get<TiposcotizacionesService>(TiposcotizacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
