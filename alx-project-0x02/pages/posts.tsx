// pages/posts.tsx
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const Posts = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();

                const formatted: PostProps[] = data.slice(0, 10).map((post: any) => ({
                    title: post.title,
                    content: post.body,
                    userId: post.userId,
                }));

                setPosts(formatted);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <Header />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Posts Page</h1>

                {loading ? (
                    <p>Loading posts...</p>
                ) : (
                    <div className="space-y-4">
                        {posts.map((post, idx) => (
                            <PostCard key={idx} title={post.title} content={post.content} userId={post.userId} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Posts;
