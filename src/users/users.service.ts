import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { password: _password, ...props } = createUserDto;

    const data = {
      ...props,
      password: await bcrypt.hash(_password, 10),
    };
    return this.prismaService.user.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.user.findUniqueOrThrow({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { password: _password, ...props } = updateUserDto;
    const data = _password
      ? {
          ...props,
          password: await bcrypt.hash(_password, 10),
        }
      : updateUserDto;

    return this.prismaService.user.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
