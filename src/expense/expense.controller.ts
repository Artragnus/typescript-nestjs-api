import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  create(@Body() createExpenseDto: CreateExpenseDto, @User() user) {
    return this.expenseService.create(createExpenseDto, user.id);
  }

  @Get()
  findAll(@User() user) {
    return this.expenseService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @User() user) {
    return this.expenseService.findOne(id, user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateExpenseDto: UpdateExpenseDto,
    @User() user,
  ) {
    return this.expenseService.update(id, updateExpenseDto, user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user) {
    return this.expenseService.remove(id, user.id);
  }
}
