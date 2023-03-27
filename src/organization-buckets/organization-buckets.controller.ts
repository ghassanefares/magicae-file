import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrganizationBucketDto } from './dto/organization-bucket.dto';
import { OrganizationBucketsService } from './organization-buckets.service';

@Controller('organization-buckets')
export class OrganizationBucketsController {
  constructor(private organizationBucketService: OrganizationBucketsService) {}

  @Post()
  async create(@Body() organizationBucketDto: OrganizationBucketDto) {
    return await this.organizationBucketService.create(organizationBucketDto);
  }

  @Put(':organizationId')
  async update(
    @Param('organizationId') organizationId: string,
    @Body() organizationBucketDto: OrganizationBucketDto,
  ) {
    return await this.organizationBucketService.update(
      organizationId,
      organizationBucketDto,
    );
  }

  @Get(':organizationId')
  findOne(@Param('organizationId') organizationId: string) {
    return this.organizationBucketService.findOne(organizationId);
  }
}
