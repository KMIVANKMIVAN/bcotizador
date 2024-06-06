import { Test, TestingModule } from '@nestjs/testing';
import { TipostechosService } from './tipostechos.service';

describe('TipostechosService', () => {
  let service: TipostechosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipostechosService],
    }).compile();

    service = module.get<TipostechosService>(TipostechosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
