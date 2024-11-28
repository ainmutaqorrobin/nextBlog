import { Fragment } from "react";
import Hero from "../components/home-page/Hero";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import { Post } from "../model";

const DUMMY_DATA: Post[] = [
  {
    date: new Date(),
    excerpt:
      "This is only test data to display before creating Database later.",
    image: { src: "getting-started-nextjs.png", alt: "image1", type: "png" },
    slug: "test-data-1",
    title: "Data 1",
  },
  {
    date: new Date(),
    excerpt:
      "This is only test data to display before creating Database later.",
    image: { src: "getting-started-nextjs.png", alt: "image2", type: "png" },
    slug: "test-data-2",
    title: "Data 2",
  },
  {
    date: new Date(),
    excerpt:
      "This is only test data to display before creating Database later.",
    image: { src: "getting-started-nextjs.png", alt: "image3", type: "png" },
    slug: "test-data-3",
    title: "Data 3",
  },
  {
    date: new Date(),
    excerpt:
      "This is only test data to display before creating Database later.",
    image: { src: "getting-started-nextjs.png", alt: "image4", type: "png" },
    slug: "test-data-4",
    title: "Data 4",
  },
];
function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
  );
}

export default HomePage;
