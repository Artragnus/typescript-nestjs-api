import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateExpenseCategoryDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description?: string | null;
}
