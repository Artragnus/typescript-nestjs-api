import { Injectable } from '@nestjs/common';
import { CreateIncomeCategoryDto } from './dto/create-income-category.dto';

@Injectable()
export class IncomeCategoriesService {
  create(createIncomeCategoryDto: CreateIncomeCategoryDto) {
    return 'This action adds a new incomeCategory';
  }

  findAll() {
    return `This action returns all incomeCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} incomeCategory`;
  }
}
