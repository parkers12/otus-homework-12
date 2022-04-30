import { set, get, ref, child } from "firebase/database";
import db from "./firebase-config";

import Task from "../types/Task";
import CRUD from "../types/CRUD";

class Firebase implements CRUD {
  #key: string;

  #dbRef = ref(db);

  collection: Task[] = [];

  constructor(key: string) {
    this.#key = key;
  }

  async create(task: Task): Promise<void> {
    await set(ref(db, this.#key), task);
  }

  async read(id?: number): Promise<Task[]> {
    let task: Task[] = [];

    let query: string;
    if (id !== undefined) {
      query = `${this.#key}`;
    } else {
      query = `${this.#key}/${id}`;
    }

    await get(child(this.#dbRef, `${query}`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.collection = [...snapshot.val()];
      }
    });

    if (this.collection !== undefined) {
      if (id !== undefined) {
        // console.log(this.collection)
        const index = this.collection.findIndex((obj) => obj.id === id);

        task.push(this.collection[index]);
      } else {
        task = [...this.collection];
      }
    }
    return task;
  }

  async update(task: Task, id: number): Promise<boolean> {
    if (id !== undefined) {
      await get(child(this.#dbRef, this.#key)).then((snapshot) => {
        if (snapshot.exists()) {
          this.collection = [...snapshot.val()];
        }
      });

      if (this.collection !== undefined && this.collection.length > 0) {
        const index = this.collection.findIndex((obj) => obj.id === id);
        this.collection[index] = task;
        await set(ref(db, this.#key), this.collection);
        return true;
      }
    }
    return false;
  }

  async delete(id?: number): Promise<boolean> {
    await get(child(this.#dbRef, this.#key)).then((snapshot) => {
      if (snapshot.exists()) {
        this.collection = [...snapshot.val()];
      }
    });

    if (id !== undefined) {
      const index = this.collection.findIndex((obj) => obj.id === id);
      this.collection.splice(index, 1);
      await set(ref(db, this.#key), this.collection);
      return true;
    }
    return false;
  }
}

export default Firebase;
