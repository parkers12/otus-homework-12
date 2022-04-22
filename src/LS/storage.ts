import ITask from "../types/ITask";
import ICRUD from "../types/ICRUD";

class Storage implements ICRUD {
    storage = "Tasks";

    write = (tasks: ITask): void =>
        localStorage.setItem(this.storage, JSON.stringify(tasks));

    getList = (): ITask[] => {
        let data: ITask[] = [];
        data = JSON.parse(localStorage.getItem(this.storage) as string);
        return data;
    }

    create = (newItem: ITask): void => {
        const data = this.getList;
        if (data.length > 0) {
            data.push(newItem);
        } else {
            this.write(newItem);
        }
    }

    read = (id: number): ITask[] => {
        let data: ITask[] = [];
        data = this.getList;
        return data[id];
    }

    update = (newItem: ITask, id: number): void => {
        const data = this.getList;
        if(data.length > 0 && data.length > id) {
            data[id] = newItem;
            this.write(data);
        }
    };

    delete = (id: number): void => {
        const data = this.getList;
        if(data.length > 0 && data.length > id) {
            data.splice(id, 1);
        }
    };
}

export default Storage;