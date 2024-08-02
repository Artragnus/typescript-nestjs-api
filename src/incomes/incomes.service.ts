import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IncomesService {
  constructor(private prismaService: PrismaService) {}
  create(createIncomeDto: CreateIncomeDto, userId: string) {
    return this.prismaService.income.create({
      data: { ...createIncomeDto, userId },
    });
  }

  findAll(userId: string) {
    return this.prismaService.income.findMany({
      where: { userId },
    });
  }

  findOne(id: string, userId: string) {
    return this.prismaService.income.findUniqueOrThrow({
      where: { id, userId },
    });
  }

  update(id: string, updateIncomeDto: UpdateIncomeDto, userId: string) {
    return this.prismaService.income.update({
      where: { id, userId },
      data: { ...updateIncomeDto },
    });
  }

  remove(id: string, userId: string) {
    return this.prismaService.income.delete({
      where: { id, userId },
    });
  }
}
