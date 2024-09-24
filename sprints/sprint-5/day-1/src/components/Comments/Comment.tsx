import { useLoaderData, useParams } from 'react-router-dom';
import type { Comment } from './Comment.type';
export const SingleComment = () => {
  const data = useLoaderData();
  const { postId } = useParams<{ id: string }>();

  console.log({ postId, data });
  return <div>Comment</div>;
};

export const commentLoader = async ({ params }): Promise<Comment[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`
  );

  if (!response.ok) {
    throw new Error('API get comments error');
  }
  const data = (await response.json()) as Comment[];

  return data;
};
