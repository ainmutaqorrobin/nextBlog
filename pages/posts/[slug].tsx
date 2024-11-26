interface PostPageProps {
  slug: string;
}
function PostPage({ slug }: PostPageProps) {
  return <div>{slug} page.</div>;
}

export default PostPage;
