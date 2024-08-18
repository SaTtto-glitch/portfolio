import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "@/../../libs/client";
import { Blog } from "@/types";

export function BlogDetail(): JSX.Element {
  const { contentId } = useParams<{ contentId: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await getDetail(contentId!);
        setBlog(fetchedBlog);
      } catch (err) {
        setError("ブログの詳細データの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [contentId]);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>ブログが見つかりません</div>;
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-screen-md bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <div className="text-sm text-gray-500 mb-8">
          {/* ここに記事のメタ情報を表示します */}
          <p>投稿日: {blog.publishedAt}</p>
          <p>更新日: {blog.updatedAt}</p>
          {/* <p>カテゴリ: {blog.category || "未分類"}</p> */}
        </div>
        <div
          className="max-w-none"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </div>
    </div>
  );
}
