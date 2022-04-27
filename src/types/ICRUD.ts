import ITask from "./ITask";

interface ICRUD {
    create(tasks: ITask): void;
    read(id?: number): ITask[];
    update(newItem: ITask, id: number): void;
    delete(id?: number): void;
}

export default ICRUD;