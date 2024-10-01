import { useEffect, useState } from 'react';
import { BASE_URL } from '../mockAxiosFn/fetchData';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/posts`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok in our component!');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error: unknown) => setErrors(error.message as string))
      .finally(() => setLoading(false));
  }, []);

  console.log({errors});
  if (loading) {
    return <div>Loading...</div>;
  }
  if (errors) {
    return <div>Error: {errors}</div>;
  }

  return (
    <div>
      Posts
      <ul>
        {posts.map((post) => (
          <li key={post.id} data-testid='post-item'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
