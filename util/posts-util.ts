import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Post } from "../model";

const postsDirectory: string = path.join(process.cwd(), "data");

function getPostData(fileName: string): Post {
  const filePath: string = path.join(postsDirectory, fileName);
  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug: string = fileName.replace(/\.md$/, "");

  const postData: Post = {
    title: data.title,
    image: data.image,
    excerpt: data.excerpt,
    date: new Date(data.date),
    slug: postSlug,
    content: content,
  };
  return postData;
}
export function getAllPosts() {
  const postFiles: string[] = fs.readdirSync(postsDirectory);
}
