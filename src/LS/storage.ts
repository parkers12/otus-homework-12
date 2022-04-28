import Task from "../types/Task";
import CRUD from "../types/CRUD";

class Storage implements CRUD {
  #key: string;

  collection: Task[];

  constructor(key: string) {
    this.#key = key || "collection";
    this.collection =
      JSON.parse(window.localStorage.getItem(key) as string) || [];
  }

  async create(task: Task): Promise<void> {
    this.collection.push(task);
    await window.localStorage.setItem(
      this.#key,
      JSON.stringify(this.collection)
    );
  }

  async read(id?: number): Promise<Task | Task[]> {
    let tasks: Task | Task[] | undefined;
    try {
      await Promise.resolve().then(() => {
        if (this.collection.length > 0) {
          if (id !== undefined) {
            tasks = this.collection.find((task) => task.id === id) as Task;
          } else {
            tasks = [...this.collection];
          }
        } else {
          tasks = undefined;
        }
      });
    } catch (e) {
      console.log(e);
    }
    return tasks;
  }

  async update(task: Task, id: number): Promise<void> {
    try {
      await Promise.resolve().then(() => {
        if (id !== undefined) {
          const index = this.collection.findIndex((obj) => obj.id === id);
          this.collection[index] = task;

          window.localStorage.setItem(
            this.#key,
            JSON.stringify(this.collection)
          );
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  async delete(id?: number): Promise<void> {
    try {
      await Promise.resolve().then(() => {
        if (id !== undefined) {
          const index = this.collection.findIndex((obj) => obj.id === id);

          this.collection.splice(index, 1);

          window.localStorage.setItem(
            this.#key,
            JSON.stringify(this.collection)
          );
        } else {
          localStorage.removeItem(this.#key);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
}

export default Storage;
