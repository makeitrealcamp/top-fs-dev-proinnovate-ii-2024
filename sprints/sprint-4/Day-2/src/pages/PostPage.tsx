import { useParams } from 'react-router-dom';

import { Post } from '../components/sideEffects/Post';

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <Post id={id} />
    </div>
  );
};
