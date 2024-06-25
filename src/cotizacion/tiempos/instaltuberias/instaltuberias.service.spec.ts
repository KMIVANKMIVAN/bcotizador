import { Test, TestingModule } from '@nestjs/testing';
import { InstaltuberiasService } from './instaltuberias.service';

describe('InstaltuberiasService', () => {
  let service: InstaltuberiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstaltuberiasService],
    }).compile();

    service = module.get<InstaltuberiasService>(InstaltuberiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
