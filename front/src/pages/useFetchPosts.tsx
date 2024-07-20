import { useState, useEffect } from 'react';

export function useFetchPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const key = {
        headers: { 'X-MICROCMS-API-KEY': apiKey },
      };
      try {
        const res = await fetch('https://sayatto.microcms.io/api/v1/blogs', key);
        const data = await res.json();
        setPosts(data.contents);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { posts, loading, error };
}