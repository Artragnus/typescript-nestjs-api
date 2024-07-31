import { Module } from '@nestjs/common';
import { AccountCategoriesService } from './account-categories.service';
import { AccountCategoriesController } from './account-categories.controller';

@Module({
  controllers: [AccountCategoriesController],
  providers: [AccountCategoriesService],
})
export class AccountCategoriesModule {}
