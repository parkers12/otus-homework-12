import storage from "./storage";

class CRUD {
    constructor(method) {
        this.storage = method;
    }

    async create(tasks: ITasks) {
        await this.storage.create(tasks);
    }

    async read() {
        await this.storage.read();
    }

    async update(tasks: ITasks, newItem: ITasks, id: number) {
        await this.storage.update(tasks, newItem, id);
    }

    async delete(tasks: ITasks, id: number) {
        await this.storage.delete(tasks, id);
    }
}

export default CRUD;