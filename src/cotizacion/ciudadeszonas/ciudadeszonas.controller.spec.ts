import { Test, TestingModule } from '@nestjs/testing';
import { CiudadeszonasController } from './ciudadeszonas.controller';
import { CiudadeszonasService } from './ciudadeszonas.service';

describe('CiudadeszonasController', () => {
  let controller: CiudadeszonasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CiudadeszonasController],
      providers: [CiudadeszonasService],
    }).compile();

    controller = module.get<CiudadeszonasController>(CiudadeszonasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
