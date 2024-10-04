export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type TaskState = Task[];

type CreateTask = {
  type: 'ADD_TASK';
  payload: Task;
};

type DeleteTask = {
  type: 'DELETE_TASK';
  payload: number;
};

type ToggleTask = {
  type: 'TOGGLE_TASK';
  payload: number;
};

type EditTask = {
  type: 'EDIT_TASK';
  payload: {
    id: number;
    title: string;
  };
};

export type TaskAction = CreateTask | DeleteTask | ToggleTask | EditTask;

export type TaskContextType = {
  tasks: TaskState;
  createTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  toggleTask: (id: number) => void;
  editTask: (id: number, title: string) => void;
};
