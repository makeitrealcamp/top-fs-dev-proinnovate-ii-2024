export type Task = {
  id: number;
  name: string;
  isDone: boolean;
};

export type TaskCardProps = {
  task: Task;
  handleEdit: (id: number, task: Task) => void;
  handleDelete: (id: number) => void;
};

