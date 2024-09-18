import { useState } from 'react';
import { Task, TaskCardProps } from './Task.types';
import style from './Task.module.css';

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  handleEdit,
  handleDelete,
}) => {
  const [editMode, setEditMode] = useState(false);
  console.log({ style });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, task: Task) => {
    e.preventDefault();

    const input = e.currentTarget.elements[0];

    if (input !== null && input instanceof HTMLInputElement) {
      handleEdit(task.id, {
        ...task,
        name: input.value,
      });
      setEditMode(false);
    }
  };

  return (
    <div className={`${style.container}`}>
      {editMode ? (
        <form onSubmit={(e) => handleSubmit(e, task)}>
          <input type="text" defaultValue={task.name} />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          margin: '1rem',
          width: '300px'
        }}>
          <h3 style={{
            color: task.isDone ? 'green' : 'red'
          }}  >{task.name}</h3>
          <p>{task.isDone ? 'Done' : 'Not done'}</p>
          <div>
            <button
              className={`${style.btn} ${style['btn-edit']}`}
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-delete"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
