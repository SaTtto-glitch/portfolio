// import { useFetchPosts } from './useFetchPosts';
// import { Link } from "react-router-dom";
// import { BlogHeader } from '../components/BlogHeader';

function BlogPage() {
  // const { posts, loading, error } = useFetchPosts();

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>

  // return (
  //   <>
  //     <BlogHeader />
  //     <div className='blogContainer'>
  //       <ul className='blogArchiveGrid'>
  //         {posts.map((post) => (
  //           <li key={post.id}>
  //             <h2>
  //               <Link to={`/portfolio-v2/blog/${post.id}`}>
  //                 <img src={post.eyecatch.url} alt="" />
  //                 {post.title}
  //               </Link>
  //             </h2>
  //           </li>
  //         ))}
  //       </ul>
  //     </div >
  //   </>
  // );
}

export default BlogPage;
