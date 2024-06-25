import { Test, TestingModule } from '@nestjs/testing';
import { GastospersonasController } from './gastospersonas.controller';
import { GastospersonasService } from './gastospersonas.service';

describe('GastospersonasController', () => {
  let controller: GastospersonasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GastospersonasController],
      providers: [GastospersonasService],
    }).compile();

    controller = module.get<GastospersonasController>(GastospersonasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
