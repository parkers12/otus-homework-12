import Task from "./Task";

interface CRUD {
  create(tasks: Task): void;
  read(id?: number): Task[] | Task;
  update(newItem: Task, id: number): void;
  delete(id?: number): void;
}

export default CRUD;
