import Image from "next/image";
import styles from "./PostHeader.module.css";
import { Image as ImageInterface } from "../../../model";
interface PostHeaderProps {
  title: string;
  image: ImageInterface;
}
function PostHeader({ image, title }: PostHeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image.src} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;
