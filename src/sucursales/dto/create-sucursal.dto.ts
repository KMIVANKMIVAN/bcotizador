import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateSucursaleDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  sucursal: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  ubicacion: string;

  @IsNumber()
  @IsNotEmpty()
  ciudad_id: number;
}
