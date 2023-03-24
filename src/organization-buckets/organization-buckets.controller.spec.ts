import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationBucketsController } from './organization-buckets.controller';

describe('OrganizationBucketsController', () => {
  let controller: OrganizationBucketsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationBucketsController],
    }).compile();

    controller = module.get<OrganizationBucketsController>(
      OrganizationBucketsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
