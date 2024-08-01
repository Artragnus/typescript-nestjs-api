import { Test, TestingModule } from '@nestjs/testing';
import { IncomeCategoriesController } from './income-categories.controller';
import { IncomeCategoriesService } from './income-categories.service';

describe('IncomeCategoriesController', () => {
  let controller: IncomeCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomeCategoriesController],
      providers: [IncomeCategoriesService],
    }).compile();

    controller = module.get<IncomeCategoriesController>(IncomeCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
