import { Test, TestingModule } from '@nestjs/testing';
import { InstalradiatoallerosController } from './instalradiatoalleros.controller';
import { InstalradiatoallerosService } from './instalradiatoalleros.service';

describe('InstalradiatoallerosController', () => {
  let controller: InstalradiatoallerosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstalradiatoallerosController],
      providers: [InstalradiatoallerosService],
    }).compile();

    controller = module.get<InstalradiatoallerosController>(InstalradiatoallerosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
