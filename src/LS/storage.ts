import ITask from "../types/ITask";
import ICRUD from "../types/ICRUD";

class Storage implements ICRUD {
    #key: string;

    collection: ITask[];

    constructor(key: string) {
        this.#key = key || 'collection';
        this.collection =
            JSON.parse(window.localStorage.getItem(key) as string) || [];
    }

    async create (task: ITask): Promise<void> {
        this.collection.push(task);
        await window.localStorage.setItem(
            this.#key, JSON.stringify(this.collection)
        );
    }

    async read (id?: number): Promise<ITask[]> {
        let task: ITask[] = [];

        try {
            await Promise.resolve().then(
                () => {
                    
                    if(this.collection.length > 0) {
                        if (id !== undefined) {
                            
                            const targetTask = this.collection.find(
                                task => task.id === id
                            ) as ITask;

                            task.push(targetTask);
                        } else {
                            task = [...this.collection];
                        }
                    }
                }
            )
        } catch (e) {
            console.log(e);
        }
        return task;
    }

    async update (task: ITask, id: number): Promise<void> {
        try {
            await Promise.resolve().then(
                () => {
                    if (id !== undefined) {
                        const index =
                            this.collection.findIndex(obj => obj.id === id);

                        this.collection[index] = task;
                            
                        window.localStorage.setItem(
                            this.#key, JSON.stringify(this.collection)
                        );
                    }
                }
            )
        } catch (e) {
            console.log(e);
        }
    };

    async delete (id?: number): Promise<void> {
        try {
            await Promise.resolve().then(
                () => {
                    if (id !== undefined) {
                        const index =
                            this.collection.findIndex(obj => obj.id === id);
                        
                        this.collection.splice(index, 1);

                        window.localStorage.setItem(
                            this.#key, JSON.stringify(this.collection)
                        );
                    } else {
                        localStorage.removeItem(this.#key);
                    }
                }
            )
        } catch (e) {
            console.log(e);
        }
    };
}

export default Storage;