export type MicroCMSContentId = {
  id: string;
};

export type MicroCMSDate = {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
};

export type Blog = {
  title: string;
  contents: string;
} & MicroCMSContentId &
  MicroCMSDate;
