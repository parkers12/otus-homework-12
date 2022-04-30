import Task from "./Task";

interface CRUD {
  create(tasks: Task): void;
  read(id?: number): Task[] | Task;
  update(newItem: Task, id: number): boolean;
  delete(id?: number): boolean;
}

export default CRUD;
