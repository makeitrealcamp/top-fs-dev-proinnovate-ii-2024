import { CreatePost } from '../components/CreatePost';
import { Post } from '../components/Post';

const postsPage = async () => {
  const postsAPI = await fetch('http://localhost:3000/api/posts');
  console.log(postsAPI);
  if (!postsAPI.ok) {
    throw new Error('Failed to fetch posts');
  }

  const posts = await postsAPI.json();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <CreatePost />
      </div>

      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </div>
  );
};

export default postsPage;
