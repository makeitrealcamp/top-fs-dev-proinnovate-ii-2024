
import { useEffect, useState } from 'react';
import { BASE_URL } from '../mockAxiosFn/fetchData';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${BASE_URL}/users`,{signal})
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(error.message);
          setLoading(false);
        }
      });

    return () => {
      console.log('Fetch aborted');
      controller.abort();
    };
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} data-testid="user-item">
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
