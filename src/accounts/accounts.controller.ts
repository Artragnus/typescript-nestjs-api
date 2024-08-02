import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}
  @Post()
  create(@Body() createAccountDto: CreateAccountDto, @User() user) {
    return this.accountsService.create(createAccountDto, user.id);
  }

  @Get()
  findAll(@User() user) {
    return this.accountsService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @User() user) {
    return this.accountsService.findOne(id, user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
    @User() user,
  ) {
    return this.accountsService.update(id, updateAccountDto, user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user) {
    return this.accountsService.remove(id, user.id);
  }
}
