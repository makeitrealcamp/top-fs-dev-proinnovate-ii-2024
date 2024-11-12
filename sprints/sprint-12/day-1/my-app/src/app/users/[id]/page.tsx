import React from 'react';

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const user = await response.json();
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // }, []);

  return (
    <div>
      USER with ID {id}
      {user.name}
    </div>
  );
};

export default page;
