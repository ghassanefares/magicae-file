import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationBucketsModule } from './organization-buckets/organization-buckets.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mfa:mfa@localhost:27017', {
      dbName: 'magic_files',
    }),
    OrganizationBucketsModule,
  ],
})
export class AppModule {}
