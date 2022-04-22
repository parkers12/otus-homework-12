import Storage from "./storage";

const storage = new Storage();

describe("Test storage", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test("Method create", async () => {
        
        const newTask = {
            "id": 1,
            "message": "Сообщение1",
            "date": "10.03.2022",
            "state": "Выполнить",
            "tag": "Тег1, Тег2"
        }

        storage.create(newTask);
        expect(storage.create).toHaveBeenLastCalledWith("tasks", newTask);
        expect(storage.__STORE__["tasks"]).toBe(newTask);
        expect(Object.keys(storage.__STORE__).length).toBe(1);

        //const mockFn = jest.fn(localStorage.setItem);
        //localStorage.setItem = mockFn;
        
        //expect(Storage.length).toBe(0);
        
        //await storage.create(newTask);
        //expect(mockFn).toHaveBeenCalledTimes(1);

        //expect(Storage.length).toBe(1);
    });
});
