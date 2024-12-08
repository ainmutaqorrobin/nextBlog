import { Fragment } from "react";
import AllPosts from "../../components/posts/AllPosts";
import { Post } from "../../model";
import { getAllPosts } from "../../util/posts-util";
import Head from "next/head";

interface AllPostsPageProps {
  posts: Post[];
}
function AllPostsPage({ posts }: AllPostsPageProps) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="decription" content="A list of all my posts" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
export default AllPostsPage;
