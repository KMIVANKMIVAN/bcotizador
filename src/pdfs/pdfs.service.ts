import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfsService {
  async createPdf(): Promise<Buffer> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Test PDF</title>
          <style>
            body { font-family: Arial, sans-serif; }
            h1 { color: blue; }
            p { font-size: 16px; }
          </style>
        </head>
        <body>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <h1>Hello World</h1>
          <p>This is a PDF generated by Puppeteer in a NestJS application.</p>
        </body>
      </html>
    `;

    await page.setContent(content);
    const pdfBuffer = await page.pdf({ format: 'A4' });

    await browser.close();
    return pdfBuffer;
  }
}
