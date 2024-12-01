import { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { Post } from "../model";
import { getAllPosts, getFeaturedPosts } from "../util/posts-util";
interface HomePageProps {
  posts: Post[];
}
function HomePage({ posts }: HomePageProps) {
  console.log(posts);

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts: Post[] = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
export default HomePage;
