export interface Post {
  title: string;
  image: Image;
  excerpt: string;
  date: Date;
  slug: string;
}

interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  type?: "jpg" | "png" | "svg";
}
