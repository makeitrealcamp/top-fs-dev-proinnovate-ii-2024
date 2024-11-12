'use client';

type Post = {
  id: number;
  name: string;
  title: string;
  content: string;
};

export const Post = ({ post }: { post: Post }) => {
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/api/posts/${post.id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
  };

  return (
    <div>
      Post
      <h3>{post.name}</h3>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <button
        className="text-white rounded-sm bg-red-400 py-2 px-3"
        onClick={handleDelete}
      >
        delete
      </button>
    </div>
  );
};
