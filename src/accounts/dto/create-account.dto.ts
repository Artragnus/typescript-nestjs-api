import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

export class CreateAccountDto {
  userId: string;

  @IsInt()
  @Min(0)
  @IsNumber()
  @IsOptional()
  balance?: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  categoryId: number;
}
