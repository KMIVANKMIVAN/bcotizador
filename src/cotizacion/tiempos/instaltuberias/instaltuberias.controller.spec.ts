import { Test, TestingModule } from '@nestjs/testing';
import { InstaltuberiasController } from './instaltuberias.controller';
import { InstaltuberiasService } from './instaltuberias.service';

describe('InstaltuberiasController', () => {
  let controller: InstaltuberiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstaltuberiasController],
      providers: [InstaltuberiasService],
    }).compile();

    controller = module.get<InstaltuberiasController>(InstaltuberiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
