import { useEffect, useState } from "react";
import { getBlogs, Blog } from "@/../../libs/client";
import { Link } from "react-router-dom";

export function BlogTop(): JSX.Element {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { contents } = await getBlogs();
        setBlogs(contents);
        console.log(contents);
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="container max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">sayatto備忘録</h1>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <Link
              to={`/blogs/${blog.id}`}
              key={blog.id}
              className="block bg-white shadow-md overflow-hidden hover:bg-gray-100 transition"
            >
              <div className="flex">
                <img
                  src={blog.eyecatch?.url}
                  alt={blog.title}
                  className="w-1/3 h-auto object-cover"
                />
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      {blog.title}
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
