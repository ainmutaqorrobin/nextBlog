import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Post } from "../model";

const postsDirectory: string = path.join(process.cwd(), "data");

export function getPostsFiles(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postId: string): Post {
  //this function to read each markdown file using filesystem.
  const postSlug: string = postId.replace(/\.md$/, "");
  const filePath: string = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent: string = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData: Post = {
    title: data.title,
    image: data.image,
    excerpt: data.excerpt,
    date: new Date(data.date).toISOString(),
    slug: postSlug,
    content: content,
    isFeatured: data.isFeatured,
  };
  return postData;
}
export function getAllPosts(): Post[] {
  //this function to extract all markdown file using getPostData function and convert to array of Post.
  const postFiles: string[] = getPostsFiles();

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
