export interface Post {
  title: string;
  image: Image;
  excerpt: string;
  date: Date | string;
  slug: string;
  isFeatured?: boolean;
  content?: {};
}

export interface Image {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: "jpg" | "png" | "svg";
}
