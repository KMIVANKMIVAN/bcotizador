import { Test, TestingModule } from '@nestjs/testing';
import { InstalradiatoallerosService } from './instalradiatoalleros.service';

describe('InstalradiatoallerosService', () => {
  let service: InstalradiatoallerosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstalradiatoallerosService],
    }).compile();

    service = module.get<InstalradiatoallerosService>(InstalradiatoallerosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
