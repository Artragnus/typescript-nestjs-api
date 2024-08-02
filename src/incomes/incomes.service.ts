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

  findAll() {
    return `This action returns all incomes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} income`;
  }

  update(id: number, updateIncomeDto: UpdateIncomeDto) {
    return `This action updates a #${id} income`;
  }

  remove(id: number) {
    return `This action removes a #${id} income`;
  }
}
