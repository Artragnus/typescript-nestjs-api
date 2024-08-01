import { Injectable } from '@nestjs/common';
import { CreateExpenseCategoryDto } from './dto/create-expense-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpenseCategoriesService {
  constructor(private prismaService: PrismaService) {}
  create(createExpenseCategoryDto: CreateExpenseCategoryDto) {
    return this.prismaService.expenseCategory.create({
      data: createExpenseCategoryDto,
    });
  }

  findAll() {
    return this.prismaService.expenseCategory.findMany();
  }

  findOne(id: number) {
    return this.prismaService.expenseCategory.findUnique({
      where: { id },
    });
  }
}
