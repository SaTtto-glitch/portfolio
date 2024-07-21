// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useFetchPosts } from './useFetchPosts';
// import parse from 'html-react-parser';


// function BlogDetail() {
//   const { id } = useParams();
//   const [post, setPost] = useState<{ title: string, content: string } | null>(null);
//   const { posts } = useFetchPosts();

//   useEffect(() => {
//     const selectedPost = posts.find(p => p.id === id);
//     if (selectedPost) {
//       setPost(selectedPost);
//     }
//   }, [id, posts]);

//   if (!post) return <div>Loading...</div>;

//   return (
//     <div className='blogDetailContent'>
//       <h2>{post.title}</h2>
//       <div>
//         {parse(post.content)}
//       </div>
//     </div>
//   );
// }

// export default BlogDetail;
