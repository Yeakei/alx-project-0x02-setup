import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import { GetStaticProps } from "next";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts = ({ posts }: PostsPageProps) => {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>

        <div className="space-y-4">
          {posts.map((post, idx) => (
            <PostCard
              key={idx}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts: PostProps[] = data.slice(0, 10).map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
    revalidate: 60, // Optional: Regenerate every 60 seconds
  };
};

export default Posts;
