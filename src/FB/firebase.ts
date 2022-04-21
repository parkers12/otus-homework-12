// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, set, get, ref, child, update } from "firebase/database";
import firebaseConfig from "./firebase-config";

import ITask from "../types/ITask";
import ICRUD from "../types/ICRUD";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

class Firebase implements ICRUD {
    static path = "Tasks";

    static getList = async (): Promise<ITask> => {
        const dbRef = ref(getDatabase());
        const data = await get(child(dbRef, this.path)).then((snapshot) => {
            if (!snapshot.exists()) {
                return null;
            }
            return snapshot.val();
        });
        return data;
    }

    static create = (tasks: ITask): Promise<number> => {
        set(ref(db, this.path), tasks);
    }

    static read = (id: number): ITask | number => {
        const starCountRef = ref(db, this.path);
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        updateStarCount(postElement, data);
        });
    }

    static update = (newItem: ITask, id: number): Promise<number> => {
        tasks[id] = newItem;
        update(ref(db, this.path), tasks);
    }        

    static delete = (id: number): Promise<number> => {
        Database.database().reference().child("users").child(uid).child("records").child(record.id).removeValue()
        set(ref(db, this.path), null);
    };
}

export default Firebase;
