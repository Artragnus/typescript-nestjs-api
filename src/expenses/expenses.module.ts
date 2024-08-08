import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ExpensesCreditCardsController } from './credit-cards/expenses-credit-cards.controller';
import { ExpensesCreditCardsService } from './credit-cards/expenses-credit-cards.service';

@Module({
  imports: [PrismaModule],
  controllers: [ExpensesController, ExpensesCreditCardsController],
  providers: [ExpensesService, ExpensesCreditCardsService],
})
export class ExpensesModule {}
