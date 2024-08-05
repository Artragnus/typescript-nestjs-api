import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateIncomeDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  accountId: string;
}
