import { Module } from '@nestjs/common';
import { AccountCategoriesService } from './account-categories.service';
import { AccountCategoriesController } from './account-categories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AccountCategoriesController],
  providers: [AccountCategoriesService],
})
export class AccountCategoriesModule {}
