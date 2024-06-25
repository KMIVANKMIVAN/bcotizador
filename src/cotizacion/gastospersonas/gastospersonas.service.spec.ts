import { Test, TestingModule } from '@nestjs/testing';
import { GastospersonasService } from './gastospersonas.service';

describe('GastospersonasService', () => {
  let service: GastospersonasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GastospersonasService],
    }).compile();

    service = module.get<GastospersonasService>(GastospersonasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
