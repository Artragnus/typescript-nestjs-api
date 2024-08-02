import { Module } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { IncomesController } from './incomes.controller';

@Module({
  exports: [IncomesService],
  controllers: [IncomesController],
  providers: [IncomesService],
})
export class IncomesModule {}
