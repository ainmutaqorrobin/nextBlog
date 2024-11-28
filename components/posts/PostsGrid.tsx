import PostItem from "./PostItem";
import styles from "./PostsGrid.module.css";
interface PostsGridProps {
  posts: [];
}
function PostsGrid({ posts }: PostsGridProps) {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem />
      ))}
    </ul>
  );
}

export default PostsGrid;
