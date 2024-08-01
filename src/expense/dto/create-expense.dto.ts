import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
  userId: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  categoryId: number;

  @IsNotEmpty()
  accountId: number;
}
