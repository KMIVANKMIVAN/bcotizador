import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
export class CreateUnidadeDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  unidad: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200, { message: 'La longitud maxima es de 200 caracteres' })
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  direccion_id: number;
}
