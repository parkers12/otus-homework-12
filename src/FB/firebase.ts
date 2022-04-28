import { set, get, ref, child } from "firebase/database";
import db from "./firebase-config";

import Task from "../types/Task";
import CRUD from "../types/CRUD";

class Firebase implements CRUD {
  #key: string;

  collection: Task[] = [];

  constructor(key: string) {
    this.#key = key;
  }

  async init(): Promise<void> {
    const dbRef = ref(db);
    await get(child(dbRef, this.#key))
      .then((snapshot) => {
        if (snapshot.exists()) {
          this.collection = [...snapshot.val()];
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async create(task: Task): Promise<void> {
    await this.init();

    if (this.collection.length > 0) {
      this.collection.push(task);
      await set(ref(db, this.#key), task);
    }
  }

  async read(id?: number): Promise<Task[]> {
    let task: Task[] = [];
    await this.init();

    if (this.collection.length > 0) {
      if (id !== undefined) {
        const index = this.collection.findIndex((obj) => obj.id === id);

        task.push(this.collection[index]);
      } else {
        task = [...this.collection];
      }
    }
    return task;
  }

  async update(task: Task, id: number): Promise<void> {
    await this.init();

    if (this.collection.length > 0) {
      if (id !== undefined) {
        const index = this.collection.findIndex((obj) => obj.id === id);

        this.collection[index] = task;
        await set(ref(db, this.#key), this.collection);
      }
    }
  }

  async delete(id?: number): Promise<void> {
    await this.init();

    if (id !== undefined) {
      const index = this.collection.findIndex((obj) => obj.id === id);

      this.collection.splice(index, 1);

      await set(ref(db, this.#key), this.collection);
    }
  }
}

export default Firebase;
