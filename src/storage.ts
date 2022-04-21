import ITask from "./type";
import CRUD from "./CRUD";

class Storage extends CRUD {

    error = (text: string): string => text;

    search = (tasks: ITask, id: number): string =>
        tasks.find(task => task.id === id).id;

    read = (): string => {
        const lsData = localStorage.getItem("tasks") as string;
        if (lsData === null) {
            this.error("No matching items");
        }
        return JSON.parse(lsData);
    }

    write = (tasks: ITask): void =>
        localStorage.setItem("tasks", JSON.stringify(tasks));

    create = (tasks: ITask): void => this.write(tasks);

    update = (tasks: ITask, newItem: ITask, id: number): void => {
        if(this.read !== null) {
            if(tasks.length > id) {
                tasks[id] = newItem;
            }
            this.write(tasks);
        } else {
            this.create(tasks);
        }
    };

    delete = (tasks: ITask, id: number): void => {
        if(tasks.length > id) {
            tasks.splice(id, 1);
        }
        this.write(tasks);
    };
}

export default Storage;