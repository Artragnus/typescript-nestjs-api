import { Injectable } from '@nestjs/common';
import { CreateIncomeCategoryDto } from './dto/create-income-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/auth/decorators/user.decorator';

@Injectable()
export class IncomeCategoriesService {
  constructor(private prismaService: PrismaService) {}
  create(createIncomeCategoryDto: CreateIncomeCategoryDto) {}

  findAll() {
    return `This action returns all incomeCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incomeCategory`;
  }
}
