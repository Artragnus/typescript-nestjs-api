import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch()
  update(@User() userId: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(userId, updateUserDto);
  }

  @Delete()
  remove(@User() userId: string) {
    return this.usersService.remove(userId);
  }
}
