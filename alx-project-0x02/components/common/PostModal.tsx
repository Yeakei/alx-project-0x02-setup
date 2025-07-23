// components/common/PostModal.tsx
import { useState } from "react";

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: { title: string; content: string }) => void;
}

const PostModal = ({ isOpen, onClose, onSubmit }: PostModalProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, content });
        setTitle("");
        setContent("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="border p-2 rounded"
                        required
                    />
                    <div className="flex justify-end gap-2">
                        <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostModal;
