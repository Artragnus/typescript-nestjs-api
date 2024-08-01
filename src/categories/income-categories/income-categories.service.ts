import { Injectable } from '@nestjs/common';
import { CreateIncomeCategoryDto } from './dto/create-income-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/auth/decorators/user.decorator';

@Injectable()
export class IncomeCategoriesService {
  constructor(private prismaService: PrismaService) {}
  create(createIncomeCategoryDto: CreateIncomeCategoryDto) {
    return this.prismaService.incomeCategory.create({
      data: createIncomeCategoryDto,
    });
  }

  findAll() {
    return this.prismaService.incomeCategory.findMany();
  }

  findOne(id: number) {
    return this.prismaService.incomeCategory.findUnique({
      where: { id },
    });
  }
}
