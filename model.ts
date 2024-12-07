import { ObjectId } from "mongodb";
export interface Post {
  title: string;
  image: Image;
  excerpt: string;
  date: Date | string;
  slug: string;
  isFeatured?: boolean;
  content?: string;
}

export interface Image {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  type?: "jpg" | "png" | "svg";
}

export interface MessageData {
  id?: ObjectId;
  email: string;
  name: string;
  message: string;
}

export enum RequestStatus {
  success = "success",
  error = "error",
  pending = "pending",
}
