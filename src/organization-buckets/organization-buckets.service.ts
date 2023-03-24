import { Injectable, Param } from '@nestjs/common';
import { OrganizationBucket } from './interface/organization-bucket.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrganizationBucketDocument } from './schemas/organization-bucket.schema';
import { OrganizationBucketDto } from './dto/organization-bucket.dto';

@Injectable()
export class OrganizationBucketsService {
  constructor(
    @InjectModel('OrganizationBucket')
    private organizationBucketDocumentModel: Model<OrganizationBucketDocument>,
  ) {}

  async create(
    organizationBucket: OrganizationBucketDto,
  ): Promise<OrganizationBucket> {
    const createdOrganizationBucket =
      await new this.organizationBucketDocumentModel(organizationBucket);
    return createdOrganizationBucket.save();
  }

  findOne(organizationId: string) {
    return `This action returns a #${organizationId}`;
  }
}
