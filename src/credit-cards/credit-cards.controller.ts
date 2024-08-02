import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreditCardsService } from './credit-cards.service';
import { CreateCreditCardDto } from './dto/create-credit-card.dto';
import { UpdateCreditCardDto } from './dto/update-credit-card.dto';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('credit-cards')
export class CreditCardsController {
  constructor(private readonly creditCardsService: CreditCardsService) {}

  @Post()
  create(@Body() createCreditCardDto: CreateCreditCardDto, @User() user) {
    return this.creditCardsService.create(createCreditCardDto, user.id);
  }

  @Get()
  findAll(@User() user) {
    return this.creditCardsService.findAll(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @User() user) {
    return this.creditCardsService.findOne(+id, user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCreditCardDto: UpdateCreditCardDto,
    @User() user,
  ) {
    return this.creditCardsService.update(+id, updateCreditCardDto, user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user) {
    return this.creditCardsService.remove(+id, user.id);
  }
}
