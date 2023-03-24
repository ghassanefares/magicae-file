import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrganizationBucketDto } from './dto/organization-bucket.dto';
import { OrganizationBucketsService } from './organization-buckets.service';

@Controller('organization-buckets')
export class OrganizationBucketsController {
  constructor(private organizationBucketService: OrganizationBucketsService) {}
  @Post()
  async create(@Body() organizationBucketDto: OrganizationBucketDto) {
    await this.organizationBucketService.create(organizationBucketDto);
  }

  @Get(':organizationId')
  findOne(@Param('organizationId') organizationId: string) {
    return this.organizationBucketService.findOne(organizationId);
  }
}
