import { Test, TestingModule } from '@nestjs/testing';
import { CiudadeszonasService } from './ciudadeszonas.service';

describe('CiudadeszonasService', () => {
  let service: CiudadeszonasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CiudadeszonasService],
    }).compile();

    service = module.get<CiudadeszonasService>(CiudadeszonasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
