import ITask from "../types/ITask";
import ICRUD from "../types/ICRUD";

class Storage implements ICRUD {

    static write = (tasks: ITask): void =>
        localStorage.setItem("tasks", JSON.stringify(tasks));

    static getList = (): ITask[] | null =>
        JSON.parse(localStorage.getItem("tasks") as string);

    static create = (newItem: ITask): number => {
        let newDataLength = 0;
        const data = Storage.getList;
        if (data !== null && Array.isArray(data)) {
            newDataLength = data.push(newItem);
        } else {
            Storage.write(newItem);
            const newData = Storage.getList;
            newDataLength = newData.length;
        }
        return newDataLength;
    }

    static read = (id: number): ITask | number => {
        const data = Storage.getList;
        if (data !== null && data.length > id) {
            return data[id];
        }
        return 0;
    }

    static update = (newItem: ITask, id: number): number => {
        const data = Storage.getList;
        if(data !== null && data.length > id) {
            data[id] = newItem;
            Storage.write(data);
            const newData = Storage.getList;
            return newData.length;
        }
        return 0;
    };

    static delete = (id: number): number => {
        let newTasks: ITask[] = [];
        const data = Storage.getList;
        if(data !== null && data.length > id) {
            newTasks = data.splice(id, 1);
            Storage.write(newTasks);
            const newData = Storage.getList;
            return newData.length;
        }
        return 0;
    };
}

export default Storage;