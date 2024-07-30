import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BadRequestError, NotFoundError } from 'src/errors';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const hash = await bcrypt.hash(createUserDto.password, 10);
      const { password: _, ...props } = createUserDto;
      const data = {
        ...props,
        password: hash,
      };
      return await this.prismaService.user.create({
        data,
      });
    } catch (e) {
      if (e.code === 'P2002') {
        throw new BadRequestError('User with this email already exists');
      }
    }
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.user.findUniqueOrThrow({
        where: { id },
      });
    } catch (e) {
      if (e.code === 'P2025') {
        throw new NotFoundError(`User with id ${id} not found`);
      }
    }
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    try {
      return await this.prismaService.user.delete({
        where: { id },
      });
    } catch (e) {
      if (e.code === 'P2025') {
        throw new NotFoundError(`User with id ${id} not found`);
      }
    }
  }
}
