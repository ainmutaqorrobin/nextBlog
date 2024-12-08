import { Post } from "../../model";
import PostItem from "./PostItem";
import styles from "./PostsGrid.module.css";
interface PostsGridProps {
  posts: Post[];
}
function PostsGrid({ posts }: PostsGridProps) {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.title} />
      ))}
    </ul>
  );
}

export default PostsGrid;
