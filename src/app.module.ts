import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AccountCategoriesModule } from './account-categories/account-categories.module';
import { AccountsModule } from './accounts/accounts.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule, AccountCategoriesModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
