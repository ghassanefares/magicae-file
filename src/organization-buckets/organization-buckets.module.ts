import { Module } from '@nestjs/common';
import { OrganizationBucketsController } from './organization-buckets.controller';
import { OrganizationBucketsService } from './organization-buckets.service';
import {
  OrganizationBucket,
  OrganizationBucketSchema,
} from './schemas/organization-bucket.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'OrganizationBucket', schema: OrganizationBucketSchema },
    ]),
  ],
  controllers: [OrganizationBucketsController],
  providers: [OrganizationBucketsService],
})
export class OrganizationBucketsModule {}
