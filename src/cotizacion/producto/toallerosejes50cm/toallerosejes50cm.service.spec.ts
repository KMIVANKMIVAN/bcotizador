import { Test, TestingModule } from '@nestjs/testing';
import { Toallerosejes50cmService } from './toallerosejes50cm.service';

describe('Toallerosejes50cmService', () => {
  let service: Toallerosejes50cmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Toallerosejes50cmService],
    }).compile();

    service = module.get<Toallerosejes50cmService>(Toallerosejes50cmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
