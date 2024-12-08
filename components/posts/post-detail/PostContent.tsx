import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import { Post } from "../../../model";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css";

interface PostContentProps {
  post: Post;
}

SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);
function PostContent({ post }: PostContentProps) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  console.log(imagePath);

  const customRenderers = {
    p({ node, children }: any) {
      if (node.children[0]?.tagName === "img") {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt="images"
              width={600}
              height={300}
              priority={false}
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },

    code({ node, inline, className, children }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div">
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className}>{children}</code>
      );
    },
  };

  return (
    <article className={styles.content}>
      <PostHeader
        title={post.title}
        image={{ src: imagePath, alt: `Header for ${post.title}` }}
      />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
