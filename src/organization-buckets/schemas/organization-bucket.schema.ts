import { StorageType } from '../interface/organization-bucket.interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrganizationBucketDocument = HydratedDocument<OrganizationBucket>;

@Schema()
export class OrganizationBucket {
  @Prop()
  organizationId: string;

  @Prop()
  organizationName: string;

  @Prop()
  storageType: StorageType;
}

export const OrganizationBucketSchema =
  SchemaFactory.createForClass(OrganizationBucket);
