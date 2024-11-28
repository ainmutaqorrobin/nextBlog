import { Post } from "../../model";
import PostsGrid from "../posts/PostsGrid";
import styles from "./FeaturedPosts.module.css";

interface FeaturedPostsProps {
  posts: Post[];
}
function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
