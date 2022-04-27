import {
    set, get, ref, child, update, onValue, push, getDatabase
} from "firebase/database";
import db from "./firebase-config";

import ITask from "../types/ITask";
import ICRUD from "../types/ICRUD";

class Firebase implements ICRUD {
    #key: string;
    
    collection: ITask[];

    constructor(key: string) {
        this.#key = key;
        this.init();
        console.log(this.collection, "44");
    }

    async init(): Promise<void> {
        const dbRef = ref(db);  
        await get(child(dbRef, this.#key)).then((snapshot) => {
            if (snapshot.exists()) {
                this.collection = [...snapshot.val()];
                console.log(this.collection, "11");
            }
        });
    }

    // async init() {
    //     const dbRef = ref(db);

    //     await get(child(dbRef, this.#key)).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             this.collection = snapshot.val();
    //                 console.log(this.collection, "11");
    //         } else {
    //             console.log("No data available");
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });

    // }


    async create (task: ITask): Promise<void> {
        console.log(await this.collection, "33");

        
        // await set(ref(db, this.#key), task);
    }

    // async read (id?: number): Promise<ITask[]> {
    // }

    // async update (task: ITask, id: number): Promise<void> {

    // }

    // async delete (id: number): Promise<void> {
 
    // };
}

export default Firebase;
