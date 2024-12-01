import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Post } from "../model";

const postsDirectory: string = path.join(process.cwd(), "data");

function getPostData(fileName: string): Post {
  //this function to read each markdown file using filesystem.
  const filePath: string = path.join(postsDirectory, fileName);
  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug: string = fileName.replace(/\.md$/, "");

  const postData: Post = {
    title: data.title,
    image: data.image,
    excerpt: data.excerpt,
    date: new Date(data.date).toISOString(),
    slug: postSlug,
    content: content,
  };
  return postData;
}
export function getAllPosts(): Post[] {
  //this function to extract all markdown file using getPostData function and convert to array of Post.
  const postFiles: string[] = fs.readdirSync(postsDirectory);

  const allPosts: Post[] = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  //sorting recent post
  const sortedPosts: Post[] = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );
  return sortedPosts;
}

export function getFeaturedPosts(): Post[] {
  const featuredPosts: Post[] = getAllPosts().filter((post) => post.isFeatured);

  return featuredPosts;
}
