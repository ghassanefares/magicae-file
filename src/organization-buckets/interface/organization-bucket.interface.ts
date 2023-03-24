export interface OrganizationBucket {
  organizationId: string;
  organizationName: string;
  storageType: StorageType;
}

export enum StorageType {
  LOCAL = 'LOCAL',
}
