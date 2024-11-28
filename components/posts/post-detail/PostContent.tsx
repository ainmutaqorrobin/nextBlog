import { Post } from "../../../model";
import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";
const DUMMY_POST: Post = {
  date: new Date(),
  excerpt: "This is only test data to display before creating Database later.",
  image: { src: "getting-started-nextjs.png", alt: "image1", type: "png" },
  slug: "test-data-1",
  title: "Data 1",
  content: "# This is a first post",
};
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image.src}`;
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={{ src: imagePath }} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
