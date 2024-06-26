import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionesambientesService } from './cotizacionesambientes.service';

describe('CotizacionesambientesService', () => {
  let service: CotizacionesambientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CotizacionesambientesService],
    }).compile();

    service = module.get<CotizacionesambientesService>(CotizacionesambientesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
