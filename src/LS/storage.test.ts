import ITask from "../types/ITask";
import Storage from "./storage";

const storage = new Storage("Task");

describe("Test storage", () => {
  beforeAll(() => {
    window.localStorage.removeItem("Task");
    // window.localStorage.clear();
  });

  test("Method create", async () => {
    const newTask1 = {
      id: 1,
      message: "Сообщение1",
      date: "10.03.2022",
      state: "Выполнить",
      tag: "Тег1, Тег2",
    };

    const tasks: ITask[] = [];
    tasks.push(newTask1);

    await storage.create(newTask1);

    const savedTask = await storage.read(1);
    const savedTasks = await storage.read();

    expect(savedTask).toStrictEqual(tasks);
    expect(savedTasks.length).toBe(1);
  });

  test("Method read", async () => {
    const newTask2 = {
      id: 2,
      message: "Сообщение2",
      date: "10.03.2022",
      state: "Выполнить",
      tag: "Тег1, Тег2",
    };

    const newTask3 = {
      id: 3,
      message: "Сообщение3",
      date: "16.03.2022",
      state: "Выполнить",
      tag: "Тег1, Тег2, Тег3",
    };

    const tasks: ITask[] = [];
    tasks.push(newTask2);

    await storage.create(newTask2);
    await storage.create(newTask3);

    const savedTask = await storage.read(2);
    const savedTasks = await storage.read();

    expect(savedTask).toStrictEqual(tasks);
    expect(savedTasks.length).toBe(3);
  });

  test("Method update", async () => {
    const newTask4 = {
      id: 2,
      message: "Сообщение2",
      date: "25.03.2022",
      state: "Выполнено",
      tag: "Тег1",
    };

    const tasks: ITask[] = [];
    tasks.push(newTask4);

    await storage.update(newTask4, 2);
    const savedTask = await storage.read(2);
    expect(savedTask).toStrictEqual(tasks);
  });

  test("Method delete", async () => {
    await storage.delete(2);
    const savedTasks = await storage.read();
    expect(savedTasks.length).toBe(2);
  });
});
