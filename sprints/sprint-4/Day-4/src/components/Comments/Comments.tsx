import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import type { Comment } from './Comment.type';

export const Comments = ({ postId }: { postId?: string }) => {
  const data = useLoaderData() as Comment[];
  const [comments] = useState<Comment[]>(data);
  console.log({ data });

  //   const fetchComments = async () => {
  //     const response = await fetch(
  //       `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  //     );

  //     if (!response.ok) {
  //       throw new Error('API get comments error');
  //     }
  //     const data = await response.json();

  //     setComments(data);
  //   };

  //   useEffect(() => {
  //     fetchComments();
  //   }, []);

  return (
    <div>
      Comments
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export const allCommentsLoader = async (): Promise<Comment[]> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);

  if (!response.ok) {
    throw new Error('API get comments error');
  }
  const data = (await response.json()) as Comment[];

  //   const commentsName = data.map((comment: any) => {
  //     return comment.name;
  //   });

  return data;
};

