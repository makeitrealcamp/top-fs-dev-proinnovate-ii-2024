
import { getToDos } from '../../utils/fetchTodos';


export const ToDos = () => {
  const data = getToDos.read();
  return (
    <>
      {data.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.completed ? 'Completed' : 'Not completed'}</p>
        </div>
      ))}
    </>
  );
};
