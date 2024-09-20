import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const URL = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

type CustomError = {
  message: string;
};

export const Posts = () => {

  const { data: posts, errors, loading } = useFetch({ url: URL });

  if (errors) {
    return <div>{errors}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors) {
    return <div>{errors}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <br />
      <ul>
        {posts.map((post) => (
          <li>
            <Link to={`${post.id}`} key={post.id}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
