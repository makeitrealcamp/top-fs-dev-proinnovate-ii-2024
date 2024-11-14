import React from 'react';
import { prisma } from '../../../../database/database';
import { deleteUser } from '@/actions/deleteUser.action';
import { User } from '@/app/components/User';

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    return null;
  }

  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/users/${id}`
  // );
  // if (!response.ok) {
  //   throw new Error('Failed to fetch users');
  // }

  // const user = await response.json();
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // }, []);

  return (
    <div>
      USER with ID {id}
      <User user={user} id={id} deleteUser={deleteUser} />
    </div>
  );
};

export default page;
