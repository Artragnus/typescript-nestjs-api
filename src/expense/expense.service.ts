import { Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExpenseService {
  constructor(private prismaService: PrismaService) {}
  create(createExpenseDto: CreateExpenseDto) {
    return this.prismaService.expense.create({
      data: createExpenseDto,
    });
  }

  findAll(userId: string) {
    return this.prismaService.expense.findMany();
  }

  findOne(id: string) {
    return this.prismaService.expense.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: string, updateExpenseDto: UpdateExpenseDto) {
    return this.prismaService.expense.update({
      where: { id },
      data: updateExpenseDto,
    });
  }

  remove(id: string) {
    return this.prismaService.expense.delete({
      where: { id },
    });
  }
}
