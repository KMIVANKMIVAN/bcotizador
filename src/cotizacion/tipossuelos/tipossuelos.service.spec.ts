import { Test, TestingModule } from '@nestjs/testing';
import { TipossuelosService } from './tipossuelos.service';

describe('TipossuelosService', () => {
  let service: TipossuelosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipossuelosService],
    }).compile();

    service = module.get<TipossuelosService>(TipossuelosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
