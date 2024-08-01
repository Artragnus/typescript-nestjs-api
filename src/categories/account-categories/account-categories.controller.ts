import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountCategoriesService } from './account-categories.service';

@Controller('account-categories')
export class AccountCategoriesController {
  constructor(
    private readonly accountCategoriesService: AccountCategoriesService,
  ) {}

  // @Post()
  // create(@Body() createAccountCategoryDto: CreateAccountCategoryDto) {
  //   return this.accountCategoriesService.create(createAccountCategoryDto);
  // }

  @Get()
  findAll() {
    return this.accountCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountCategoriesService.findOne(+id);
  }
}
