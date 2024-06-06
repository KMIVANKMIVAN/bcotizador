import { Test, TestingModule } from '@nestjs/testing';
import { SemillacotizacionService } from './semillacotizacion.service';

describe('SemillacotizacionService', () => {
  let service: SemillacotizacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SemillacotizacionService],
    }).compile();

    service = module.get<SemillacotizacionService>(SemillacotizacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
