import { Test, TestingModule } from '@nestjs/testing';
import { TiposparedesService } from './tiposparedes.service';

describe('TiposparedesService', () => {
  let service: TiposparedesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposparedesService],
    }).compile();

    service = module.get<TiposparedesService>(TiposparedesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
