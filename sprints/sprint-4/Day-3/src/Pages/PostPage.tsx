import { useParams } from 'react-router-dom';
import { Post } from '../components/Posts/Post';
import { Comments } from '../components/Comments/Comments';

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Post not found</div>;
  }
  return (
    <div>
      <Post id={id} />

      <Comments postId={id} />
    </div>
  );
};
