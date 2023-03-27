import { StorageType } from '../interface/organization-bucket.interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OrganizationBucketDocument = OrganizationBucket & Document;

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
