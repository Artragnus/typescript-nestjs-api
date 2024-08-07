import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenseCreditCardDto } from './create-expenses-credit-cards.dto';

export class UpdateExpenseCreditCardDto extends PartialType(
  CreateExpenseCreditCardDto,
) {}
