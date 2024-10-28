import { type Task } from "./task.types";

export type TaskAction =
  | { type: "ADD_TASK"; payload: { task: Task } }
  | { type: "DELETE_TASK"; payload: { id: Task["id"] } }
  | { type: "UPDATE_TASK"; payload: { task: Task } }
  | {
      type: "TOGGLE_TASK";
      payload: { id: Task["id"]; status: Task["status"] };
    };
