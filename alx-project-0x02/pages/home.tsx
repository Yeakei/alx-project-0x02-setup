import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

interface Post {
    title: string;
    content: string;
}

export const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([{ title: "Test", content: "Test" }]);

    const handleAddPost = (newPost: Post) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <>
            <Header />
            <div className="p-6">
                <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Create Post
                </button>

                <PostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />

                <div className="mt-6 space-y-4">
                    {posts.map((post, index) => (
                        <Card key={index} title={post.title} content={post.content} />
                    ))}
                </div>
            </div>
        </>
    );
};
