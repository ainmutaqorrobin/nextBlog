import { Post } from "../../../model";
import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";
interface PostContentProps {
  post: Post;
}
function PostContent({ post }: PostContentProps) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={{ src: imagePath }} />
      {post.content && <ReactMarkdown>{post.content}</ReactMarkdown>}
    </article>
  );
}

export default PostContent;
