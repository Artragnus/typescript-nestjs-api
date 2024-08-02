import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateCreditCardDto {
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  limit: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  accountId: number;

  @Max(31)
  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  closingDay: number;

  @Max(31)
  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  dueDate: number;
}
