import { Injectable } from '@nestjs/common';
import { CreateExpenseCreditCardDto } from './dto/create-expenses-credit-cards.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateExpenseCreditCardDto } from './dto/update-expense-credit-card.dto';

@Injectable()
export class ExpensesCreditCardsService {
  constructor(private prismaService: PrismaService) {}
  create(
    createExpenseCreditCardDto: CreateExpenseCreditCardDto,
    userId: string,
  ) {
    return this.prismaService.creditCardExpense.create({
      data: { ...createExpenseCreditCardDto, userId },
    });
  }

  findAll(userId: string) {
    return this.prismaService.creditCardExpense.findMany({
      where: { userId },
    });
  }

  findOne(id: string, userId: string) {
    return this.prismaService.creditCardExpense.findUniqueOrThrow({
      where: { id, userId },
    });
  }

  update(
    id: string,
    updateExpenseCreditCardDto: UpdateExpenseCreditCardDto,
    userId: string,
  ) {
    return this.prismaService.creditCardExpense.update({
      where: { id, userId },
      data: updateExpenseCreditCardDto,
    });
  }

  remove(id: string, userId: string) {
    return this.prismaService.creditCardExpense.delete({
      where: { id, userId },
    });
  }
}
