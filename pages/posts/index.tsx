import AllPosts from "../../components/posts/AllPosts";
import { Post } from "../../model";
import { getAllPosts } from "../../util/posts-util";

interface AllPostsPageProps {
  posts: Post[];
}
function AllPostsPage({ posts }: AllPostsPageProps) {
  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
