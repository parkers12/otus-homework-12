// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, get, ref, child, update } from "firebase/database";
import firebaseConfig from "./firebase-config";

import ITask from "./type";
import CRUD from "./CRUD";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export class Firebase extends CRUD {
    

    create = (tasks: ITask, path: string): void => {
        set(ref(db, path), tasks);
    }

    read = (path: string): string => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, path));
    }

    update = (tasks: ITask, newItem: ITask, id: number, path: string): void => {
        tasks[id] = newItem;
        update(ref(db, path), tasks);
    }        

    delete = (path: string): void => {
        set(ref(db, path), null);
    };
}