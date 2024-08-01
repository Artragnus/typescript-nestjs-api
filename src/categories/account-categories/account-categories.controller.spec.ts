import { Test, TestingModule } from '@nestjs/testing';
import { AccountCategoriesController } from './account-categories.controller';
import { AccountCategoriesService } from './account-categories.service';

describe('AccountCategoriesController', () => {
  let controller: AccountCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountCategoriesController],
      providers: [AccountCategoriesService],
    }).compile();

    controller = module.get<AccountCategoriesController>(AccountCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
