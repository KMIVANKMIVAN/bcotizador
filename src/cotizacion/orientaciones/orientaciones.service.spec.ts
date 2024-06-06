import { Test, TestingModule } from '@nestjs/testing';
import { OrientacionesService } from './orientaciones.service';

describe('OrientacionesService', () => {
  let service: OrientacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrientacionesService],
    }).compile();

    service = module.get<OrientacionesService>(OrientacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
