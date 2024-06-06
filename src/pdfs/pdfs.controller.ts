import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { PdfsService } from './pdfs.service';
import { Public } from 'src/auth/public.decorator';

@Controller('pdfs')
export class PdfsController {
  constructor(private readonly pdfsService: PdfsService) { }

  @Public()
  @Get()
  async getPdf(@Res() res: Response) {
    const pdfBuffer = await this.pdfsService.createPdf();
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename=test.pdf',
      'Content-Length': pdfBuffer.length,
    });
    res.end(pdfBuffer);
  }
  //descargar
  /* @Get()
  async getPdf(@Res() res: Response) {
    const pdfBuffer = await this.pdfsService.createPdf();
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=test.pdf',
      'Content-Length': pdfBuffer.length,
    });
    res.end(pdfBuffer);
  } */
}
