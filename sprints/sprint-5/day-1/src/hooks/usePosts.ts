import { useEffect, useState } from 'react';
import { API } from '../utils/API';

export const usePosts = () => {
  const controller = new AbortController();
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    try {
      const { data } = await API.get('/posts', {
        signal: controller.signal,
      });
      console.log({ data });
      setPosts(data);
      //   return data;
    } catch (error) {
        console.error(error);
      throw new Error('Error fetching posts');
    }
  };

  const createPost = async (post: any) => {
    axios.post('https://jsonplaceholder.typicode.com/posts', post);
  };

  useEffect(() => {
    getPosts();

    return () => controller.abort();
  }, []);

  return { posts };
};
