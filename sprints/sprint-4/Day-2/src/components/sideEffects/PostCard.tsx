type Props = {
  title: string;
  body: string;
  id: number;
};

export const PostCard = ({ title, body , id}: Props) => {
  return (
    <div>
      Post number: {id}
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
