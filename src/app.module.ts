import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { ExpenseCategoriesModule } from './categories/expense-categories/expense-categories.module';
import { ExpensesModule } from './expenses/expenses.module';
import { AccountCategoriesModule } from './categories/account-categories/account-categories.module';
import { ConfigModule } from '@nestjs/config';
import { IncomeCategoriesModule } from './categories/income-categories/income-categories.module';
import { IncomesModule } from './incomes/incomes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PrismaModule,
    AuthModule,
    AccountCategoriesModule,
    AccountsModule,
    ExpenseCategoriesModule,
    ExpensesModule,
    IncomeCategoriesModule,
    IncomesModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    AppService,
  ],
})
export class AppModule {}
