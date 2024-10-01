import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../mockAxiosFn/fetchData';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`);
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} data-testid="post-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
