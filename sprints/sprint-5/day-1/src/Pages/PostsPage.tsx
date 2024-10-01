import { useOutletContext } from 'react-router-dom';
import { Posts } from '../components/Posts/Posts';
import { usePosts } from '../hooks/usePosts';

const PostsPage = () => {
  const context = useOutletContext();
  console.log({ context });
  const { posts } = usePosts();

  console.log({ posts });
  return (
    <>
      <h2>posts</h2>
      {/* <Posts /> */}
    </>
  );
};

export default PostsPage;
