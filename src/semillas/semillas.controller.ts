import { Controller, Get, Post } from '@nestjs/common';
import { SemillasService } from './semillas.service';
import { Public } from 'src/auth/public.decorator';

@Controller('semillas')
export class SemillasController {
  constructor(private readonly semillasService: SemillasService) { }

  @Public()
  @Post('ejecutarsemilla')
  ejecutarSemilla() {
    return this.semillasService.ejecutarSemilla();
  }

}