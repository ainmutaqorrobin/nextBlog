import AllPosts from "../../components/posts/AllPosts";
import { Post } from "../../model";

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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_DATA} />;
}

export default AllPostsPage;
