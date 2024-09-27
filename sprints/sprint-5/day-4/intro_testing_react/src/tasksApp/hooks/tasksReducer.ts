import { TaskState, TaskAction } from './tasks.types';

export const tasksReducer = (
  state: TaskState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.payload];

    case 'DELETE_TASK':
      return state.filter(({ id }) => id !== action.payload);

    case 'TOGGLE_TASK':
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      return state;
  }
};
