import { Injectable } from '@nestjs/common';
import { CreateAccountCategoryDto } from './dto/create-account-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountCategoriesService {
  constructor(private prismaService: PrismaService) {}
  create(createAccountCategoryDto: CreateAccountCategoryDto) {
    return this.prismaService.accountCategory.create({
      data: createAccountCategoryDto,
    });
  }

  findAll() {
    return this.prismaService.accountCategory.findMany();
  }

  findOne(id: number) {
    return this.prismaService.accountCategory.findUniqueOrThrow({
      where: { id },
    });
  }
}
