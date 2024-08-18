import { useEffect, useState } from "react";
import { getBlogs } from "@/../../libs/client";
import { Link } from "react-router-dom";

export function BlogTop(): JSX.Element {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { contents } = await getBlogs();
        setBlogs(contents);
      } catch (err) {
        setError("ブログデータの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>ブログ一覧</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
