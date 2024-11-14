'use client';

export const User = ({
  id,
  user,
  deleteUser,
}: {
  id: string;
  user: {
    id: string;
    name: string | null;
    email: string;
  };
  deleteUser: (id: string) => void;
}) => {
  return (
    <div>
      <p> {user?.name}</p>
      <p>{user.email}</p>
      <button onClick={() => deleteUser(id)}>delete</button>
    </div>
  );
};
