import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  ArrayMinSize,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  nombres: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  apellidos: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  ci: string;

  @IsString()
  @IsOptional()
  @MaxLength(10, { message: 'La longitud maxima es de 10 caracteres' })
  complemento: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(50, { message: 'La longitud maxima es de 50 caracteres' })
  correo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100, { message: 'La longitud maxima es de 100 caracteres' })
  contrasenia: string;

  @IsBoolean()
  se_cambiado_cntr: boolean;

  @IsBoolean()
  es_activo: boolean;

  @IsNumber()
  @IsNotEmpty()
  sucursal_id: number;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayMinSize(1)
  roles: number[]; // Array de IDs de roles

  @IsNumber()
  @IsNotEmpty()
  cargo_id: number;
}
