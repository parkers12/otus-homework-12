import ITask from "./ITask";

interface ICRUD {
    storage: string;
    create(tasks: ITask): void;
    read(id: number): ITask[];
    update(newItem: ITask, id: number): void;
    delete(id: number): void;
    getList(): ITask[];
}

export default ICRUD;