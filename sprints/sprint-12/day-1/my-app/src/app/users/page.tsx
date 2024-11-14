import Link from 'next/link';
import { prisma } from '../../../database/database';

import { createUser } from '@/actions/createUser.action';
export const revalidate = 60;

const UsersPage = async () => {
  // const response = await fetch('https://jsonplaceholder.typicode.com/users')
  // if (!response.ok) {
  //   throw new Error('Failed to fetch users');
  // }

  const users = await prisma.user.findMany();

  // const users = await response.json();
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // }, []);

  /*

incremental static regeneration (ISR) is a feature that allows you to update static pages without rebuilding the entire site.
server side rendering (SSR) is a feature that allows you to render pages on the server side.
*/

  return (
    <div>
      <h1>Users</h1>

      <form action={createUser} className="flex flex-col gap-4 items-start">
        <label>
          email:
          <input className="text-slate-800" type="email" name="email" />
        </label>
        <label>
          Name:
          <input className="text-slate-800" type="text" name="name" />
        </label>
        <button className="text-red-400" type="submit">
          Submit
        </button>
      </form>

      {users.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
      {/* <li>
        <Link href={`/users/${1}`}>User 1</Link>
      </li>
      <li>
        <Link href={`/users/${2}`}>User 2</Link>
      </li>
      <li>
        <Link href={`/users/${3}`}>User 3</Link>
      </li> */}
    </div>
  );
};

export default UsersPage;
