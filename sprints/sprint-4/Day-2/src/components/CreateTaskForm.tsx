import { Task } from "./Task.types";
import './form.scss';

export const CreateTaskForm = ({
  onCreateTask,
}: {
  onCreateTask: (task: Task) => void;
}): JSX.Element => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const input = e.currentTarget.elements[0];

    if (input !== null && input instanceof HTMLInputElement) {
      onCreateTask({
        id: Date.now(),
        name: input.value,
        isDone: false,
      });
    }
  };

  return (
    <div>
      <form  className="form" onSubmit={handleSubmit}>
        <h2>Create task</h2>
       <div className="form-group">
       <input type="text" placeholder="Task name" name="task_title" />
       <button type="submit">Create task</button>
       </div>
      </form>
    </div>
  );
};