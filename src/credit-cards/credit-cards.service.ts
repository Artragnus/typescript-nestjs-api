import { Injectable } from '@nestjs/common';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { UpdateCreditCardDto } from './dto/update-credit-card.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CreditCardsService {
  constructor(private prismaService: PrismaService) {}
  create(createCreditCardDto: CreateCreditCardDto, userId: string) {
    return this.prismaService.creditCard.create({
      data: {
        ...createCreditCardDto,
        userId,
      },
    });
  }

  findAll(userId: string) {
    return this.prismaService.creditCard.findMany({
      where: { userId },
    });
  }

  findOne(id: string, userId: string) {
    return this.prismaService.creditCard.findUniqueOrThrow({
      where: { id, userId },
    });
  }

  update(id: string, updateCreditCardDto: UpdateCreditCardDto, userId: string) {
    return this.prismaService.creditCard.update({
      where: { id, userId },
      data: updateCreditCardDto,
    });
  }

  remove(id: number, userId: string) {
    return this.prismaService.creditCard.delete({
      where: { id, userId },
    });
  }
}
