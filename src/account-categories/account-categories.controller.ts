import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountCategoriesService } from './account-categories.service';
import { CreateAccountCategoryDto } from './dto/create-account-category.dto';
import { UpdateAccountCategoryDto } from './dto/update-account-category.dto';

@Controller('account-categories')
export class AccountCategoriesController {
  constructor(private readonly accountCategoriesService: AccountCategoriesService) {}

  @Post()
  create(@Body() createAccountCategoryDto: CreateAccountCategoryDto) {
    return this.accountCategoriesService.create(createAccountCategoryDto);
  }

  @Get()
  findAll() {
    return this.accountCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountCategoryDto: UpdateAccountCategoryDto) {
    return this.accountCategoriesService.update(+id, updateAccountCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountCategoriesService.remove(+id);
  }
}
