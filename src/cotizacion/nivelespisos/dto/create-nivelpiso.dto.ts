import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateNivelpisoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  nivelpiso: string;

  @IsNumber()
  @IsNotEmpty()
  valor: number;
}
