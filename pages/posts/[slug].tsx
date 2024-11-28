import PostContent from "../../components/posts/post-detail/PostContent";

interface PostDetailPageProps {
  slug: string;
}
function PostDetailPage({ slug }: PostDetailPageProps) {
  return <PostContent />;
}

export default PostDetailPage;
