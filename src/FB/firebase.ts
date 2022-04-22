import { set, get, ref, child, update, onValue, push } from "firebase/database";
import db from "./firebase-config";

import ITask from "../types/ITask";
import ICRUD from "../types/ICRUD";

class Firebase implements ICRUD {
    storage = "Tasks";

    getList = async (): Promise<ITask[]> => {
        const dbRef = ref(db);
        let data: ITask[] = [];
        await get(child(dbRef, this.storage)).then((snapshot) => {
            data = snapshot.val();
        });
        return data;
    }

    create = async (tasks: ITask): Promise<void> =>
        await set(ref(db, this.storage), tasks);

    read = async (id: number): Promise<ITask[]> => {
        let data: ITask[] = [];
        await onValue(ref(db, this.storage + id), (snapshot) => {
            data = snapshot.val();
        });
        return data;
    }

    update = async (newItem: ITask, id: number): Promise<void> => {
        const data: ITask[] = [];
        data[id] = newItem;
        await update(ref(db), data);
    }        

    delete = async (id: number): Promise<void> => {
        const task = ref(db, this.storage + id);
        task.remove();
    };
}

export default Firebase;
