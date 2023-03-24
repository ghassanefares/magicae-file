export class OrganizationBucketDto {
  organizationId: string;
  organizationName: string;
  storageType: StorageType;
}

export enum StorageType {
  LOCAL,
}
