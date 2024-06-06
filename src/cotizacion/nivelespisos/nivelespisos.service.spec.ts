import { Test, TestingModule } from '@nestjs/testing';
import { NivelespisosService } from './nivelespisos.service';

describe('NivelespisosService', () => {
  let service: NivelespisosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NivelespisosService],
    }).compile();

    service = module.get<NivelespisosService>(NivelespisosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
