import { Test, TestingModule } from '@nestjs/testing';
import { FactoresviajesService } from './factoresviajes.service';

describe('FactoresviajesService', () => {
  let service: FactoresviajesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FactoresviajesService],
    }).compile();

    service = module.get<FactoresviajesService>(FactoresviajesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
