import Link from "next/link";
import styles from "./PostItem.module.css";
import Image from "next/image";
import { Post } from "../../model";

interface PostItemProps {
  post: Post;
  key: string;
}
function PostItem({ post, key }: PostItemProps) {
  const { image, title, date, excerpt, slug } = post;

  const formatDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={styles.post} key={key}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image
            src={imagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formatDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
