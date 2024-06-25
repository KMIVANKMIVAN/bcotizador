import { Test, TestingModule } from '@nestjs/testing';
import { Radiadoresejes50cmService } from './radiadoresejes50cm.service';

describe('Radiadoresejes50cmService', () => {
  let service: Radiadoresejes50cmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Radiadoresejes50cmService],
    }).compile();

    service = module.get<Radiadoresejes50cmService>(Radiadoresejes50cmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
