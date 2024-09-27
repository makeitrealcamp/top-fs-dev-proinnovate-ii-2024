export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskAction =
  | {
      type: 'ADD_TASK';
      payload: Task;
    }
  | {
      type: 'DELETE_TASK';
      payload: number;
    }
  | {
      type: 'TOGGLE_TASK';
      payload: number;
    };

export type TaskState = Task[];
