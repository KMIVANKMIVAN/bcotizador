import { Controller, Get, Post } from '@nestjs/common';
import { SemillacotizacionService } from './semillacotizacion.service';
import { Public } from 'src/auth/public.decorator';

@Controller('semillacotizacion')
export class SemillacotizacionController {
  constructor(private readonly semillacotizacionService: SemillacotizacionService) { }

  @Public()
  @Post('ejecutarsemilla')
  ejecutarSemilla() {
    return this.semillacotizacionService.ejecutarSemillacotizacion();
  }
}
