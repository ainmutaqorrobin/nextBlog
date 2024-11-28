import { Post } from "../../model";
import styles from "./AllPosts.module.css";
import PostsGrid from "./PostsGrid";

interface AllPostsProps {
  posts: Post[];
}
function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
