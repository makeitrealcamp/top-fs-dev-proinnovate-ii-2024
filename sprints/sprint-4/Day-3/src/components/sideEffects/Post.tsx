import { useEffect, useState } from 'react';
import { PostCard } from './PostCard';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const Post = ({ id }: { id: string }) => {
  const [post, setPost] = useState({ title: '', body: '', id: 0 });
  //   const [post, setPost] = useState<Post>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('API get post error');
        }

        return response.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        setError(error.message);
        console.error(error.message);
      });
  }, []);

  if (!post?.title || error) {
    return (
      <div>
        Post not found
        {error && <div>{error}</div>}
      </div>
    );
  }
  return <PostCard title={post.title} body={post.body} id={post.id} />;
};
