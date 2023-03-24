import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationBucketsService } from './organization-buckets.service';

describe('OrganizationBucketsService', () => {
  let service: OrganizationBucketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationBucketsService],
    }).compile();

    service = module.get<OrganizationBucketsService>(
      OrganizationBucketsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
