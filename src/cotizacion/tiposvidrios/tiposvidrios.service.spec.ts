import { Test, TestingModule } from '@nestjs/testing';
import { TiposvidriosService } from './tiposvidrios.service';

describe('TiposvidriosService', () => {
  let service: TiposvidriosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposvidriosService],
    }).compile();

    service = module.get<TiposvidriosService>(TiposvidriosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
