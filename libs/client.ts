import { createClient } from "microcms-js-sdk";
import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type MicroCMSContentId = {
  id: string;
};

export type Blog = {
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

if (!import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("VITE_MICROCMS_SERVICE_DOMAIN is required");
}

if (!import.meta.env.VITE_MICROCMS_API_KEY) {
  throw new Error("VITE_MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getBlogs = async () => {
  const blogs = await client.getList<Blog>({
    endpoint: "blogs",
  });
  return blogs;
};

// ブログの詳細を取得
export const getDetail = async (contentId: string) => {
  const blog = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
  });
  return blog;
};
