import type { TaskAction, Task } from "../types";

export const TaskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload.task];
    case "DELETE_TASK":
      return state.filter((item) => item.id !== action.payload.id);
    case "UPDATE_TASK":
      return state.map((item) => {
        if (item.id === action.payload.task.id) {
          return {
            ...item,
            ...action.payload.task,
          };
        }
        return item;
      });
    case "TOGGLE_TASK":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            status: action.payload.status,
          };
        }
        return item;
      });
    default:
      return state;
  }
};
