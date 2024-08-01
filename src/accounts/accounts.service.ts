import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prismaService: PrismaService) {}
  create(createAccountDto: CreateAccountDto) {
    return this.prismaService.account.create({
      data: createAccountDto,
    });
  }

  findAll() {
    return this.prismaService.account.findMany();
  }

  findOne(id: number) {
    return this.prismaService.account.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return this.prismaService.account.update({
      where: { id },
      data: updateAccountDto,
    });
  }

  remove(id: number) {
    return this.prismaService.account.delete({
      where: { id },
    });
  }
}
