import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationBucketsController } from './organization-buckets/organization-buckets.controller';
import { OrganizationBucketsService } from './organization-buckets/organization-buckets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationBucketSchema } from './organization-buckets/schemas/organization-bucket.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mfa:mfa@localhost:27017', {
      dbName: 'magic_files',
    }),
    MongooseModule.forFeature([
      { name: 'OrganizationBucket', schema: OrganizationBucketSchema },
    ]),
  ],
  controllers: [AppController, OrganizationBucketsController],
  providers: [AppService, OrganizationBucketsService],
})
export class AppModule {}
