import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ExpensesCreditCardsService } from './expenses-credit-cards.service';
import { User } from 'src/auth/decorators/user.decorator';
import { CreateExpenseCreditCardDto } from './dto/create-expenses-credit-cards.dto';
import { UpdateExpenseCreditCardDto } from './dto/update-expense-credit-card.dto';

@Controller('expenses/credit-cards')
export class ExpensesController {
  constructor(
    private readonly expenseCreditCardService: ExpensesCreditCardsService,
  ) {}

  @Post()
  create(@Body() createExpenseDto: CreateExpenseCreditCardDto, @User() user) {
    return this.expenseCreditCardService.create(createExpenseDto, user.id);
  }

  @Get()
  findAll(@User() user) {
    return this.expenseCreditCardService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @User() user) {
    return this.expenseCreditCardService.findOne(id, user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExpenseDto: UpdateExpenseCreditCardDto,
    @User() user,
  ) {
    return this.expenseCreditCardService.update(id, updateExpenseDto, user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user) {
    return this.expenseCreditCardService.remove(id, user.id);
  }
}
