import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpenseService {
  constructor(private prismaService: PrismaService) {}
  create(createExpenseDto: CreateExpenseDto, userId: string) {
    return this.prismaService.expense.create({
      data: { ...createExpenseDto, userId },
    });
  }

  findAll(userId: string) {
    return this.prismaService.expense.findMany({
      where: { userId },
    });
  }

  findOne(id: string, userId: string) {
    return this.prismaService.expense.findUniqueOrThrow({
      where: { id, userId },
    });
  }

  update(id: string, updateExpenseDto: UpdateExpenseDto, userId: string) {
    return this.prismaService.expense.update({
      where: { id, userId },
      data: updateExpenseDto,
    });
  }

  remove(id: string, userId: string) {
    return this.prismaService.expense.delete({
      where: { id, userId },
    });
  }
}
