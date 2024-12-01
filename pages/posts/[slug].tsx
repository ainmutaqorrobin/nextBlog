import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../util/posts-util";
import { Post } from "../../model";

interface PostDetailPageProps {
  slug: string;
  post: Post;
}
function PostDetailPage({ post }: PostDetailPageProps) {
  return <PostContent post={post} />;
}

export function getStaticProps(context: any) {
  const { slug } = context.params;

  const post: Post = getPostData(slug);

  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames: string[] = getPostsFiles();
  const slugs: string[] = postFileNames.map((fileName) =>
    fileName.replace(/\.md$/, "")
  );
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export default PostDetailPage;
