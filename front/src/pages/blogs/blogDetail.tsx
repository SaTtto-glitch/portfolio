import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetail } from "@/../../libs/client";
import { Blog } from "@/types"; // 型をインポート

export function BlogDetail(): JSX.Element {
  const { contentId } = useParams<{ contentId: string }>();
  const [blog, setBlog] = useState<Blog | null>(null); // Blog 型を使用
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
    <div>
      <h1>{blog.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: blog.contents,
        }}
      />
    </div>
  );
}
