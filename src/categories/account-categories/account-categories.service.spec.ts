import { Test, TestingModule } from '@nestjs/testing';
import { AccountCategoriesService } from './account-categories.service';

describe('AccountCategoriesService', () => {
  let service: AccountCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountCategoriesService],
    }).compile();

    service = module.get<AccountCategoriesService>(AccountCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
