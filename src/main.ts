import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar ValidationPipe con configuraciones
  /* app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true, // Elimina propiedades que no están en el DTO
      // forbidNonWhitelisted: true, // Arroja una excepción si se encuentran propiedades no permitidas
      // transform: true, // Transforma los objetos a sus tipos especificados en los DTOs
    })
  ); */
  app.enableCors();
  await app.listen(3010);
}
bootstrap();
