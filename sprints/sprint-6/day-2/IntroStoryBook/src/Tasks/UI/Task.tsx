import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

interface TaskProps {
  task: {
    id: number;
    title: string;
    completed: boolean;
  };
}

export const Task = ({ task }: TaskProps) => {
  const user = useContext(UserContext);

  console.log({ user });
// user.updateName('John Doe');
  return (
    <div key={task.id}>
      <h3>{task.title}</h3>
      {user?.id && <p>{task.completed ? 'Completed' : 'Not Completed'}</p>}
    </div>
  );
};
