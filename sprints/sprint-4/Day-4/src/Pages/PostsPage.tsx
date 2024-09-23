import { useOutletContext } from 'react-router-dom';
import { Posts } from '../components/Posts/Posts';

const PostsPage = () => {
  const context = useOutletContext();
  console.log({ context });
  return (
    <>
      <h2>posts</h2>
      <Posts />
    </>
  );
};

export default PostsPage;
