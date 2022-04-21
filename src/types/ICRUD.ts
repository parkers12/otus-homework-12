import ITask from "./ITask";

interface ICRUD {
    create(tasks: ITask): number;
    read(id: number): ITask | number;
    update(newItem: ITask, id: number): number;
    delete(id: number): void;
    getList(): ITask[] | null;
}

export default ICRUD;