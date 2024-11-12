import Link from 'next/link';
export const revalidate = 60;


const UsersPage =  async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }

  const users = await response.json();
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
      page
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
