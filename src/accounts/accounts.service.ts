import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prismaService: PrismaService) {}
  create(createAccountDto: CreateAccountDto, userId: string) {
    return this.prismaService.account.create({
      data: { ...createAccountDto, userId },
    });
  }

  findAll(userId: string) {
    return this.prismaService.account.findMany({
      where: { userId },
    });
  }

  findOne(id: string, userId: string) {
    return this.prismaService.account.findUniqueOrThrow({
      where: { id, userId },
    });
  }

  update(id: string, updateAccountDto: UpdateAccountDto, userId: string) {
    return this.prismaService.account.update({
      where: { id, userId },
      data: updateAccountDto,
    });
  }

  remove(id: string, userId: string) {
    return this.prismaService.account.delete({
      where: { id, userId },
    });
  }
}
