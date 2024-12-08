import { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { Post } from "../model";
import { getFeaturedPosts } from "../util/posts-util";
import Head from "next/head";
interface HomePageProps {
  posts: Post[];
}
function HomePage({ posts }: HomePageProps) {
  return (
    <Fragment>
      <Head>
        <title>Robin's Blog</title>
        <meta name="description" content="This is my first blog page" />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts: Post[] = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default HomePage;
