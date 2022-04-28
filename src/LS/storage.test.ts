import Task from "../types/Task";
import Storage from "./storage";

const storage = new Storage("Task");

describe("Test storage", () => {
  test("Method create", async () => {
    const task = {
      id: 1,
      message: "Сообщение1",
      date: "10.03.2022",
      state: "Выполнить",
      tag: "Тег1, Тег2",
    };

    await storage.create(task);
    expect(await storage.read(1)).toStrictEqual(task);
  });

  test("Method read", async () => {
    const task1 = {
      id: 1,
      message: "Сообщение1",
      date: "10.03.2022",
      state: "Выполнить",
      tag: "Тег1, Тег2",
    };

    const task2 = {
      id: 2,
      message: "Сообщение2",
      date: "16.03.2022",
      state: "Выполнить",
      tag: "Тег1, Тег2, Тег3",
    };

    await storage.delete(1);
    expect(await storage.read()).toBe(undefined);

    await storage.create(task1);
    expect(await storage.read(1)).toStrictEqual(task1);

    await storage.create(task2);
    expect((await storage.read()).length).toBe(2);
  });

  test("Method update", async () => {
    const task3 = {
      id: 3,
      message: "Сообщение3",
      date: "10.03.2022",
      state: "Выполнить",
      tag: "Тег1, Тег2",
    };
    const task4 = {
      id: 4,
      message: "Сообщение4",
      date: "25.03.2022",
      state: "Выполнено",
      tag: "Тег1",
    };
    const task2 = {
      id: 2,
      message: "Сообщение2",
      date: "26.03.2022",
      state: "Выполнить",
      tag: "Тег1, Тег2, Тег3",
    };

    await storage.create(task3);
    await storage.create(task4);
    expect((await storage.read()).length).toBe(4);

    await storage.update(task2, 2);
    expect(await storage.read(2)).toStrictEqual(task2);
  });

  test("Method delete", async () => {
    const task = {
      id: 1,
      message: "Сообщение1",
      date: "10.03.2022",
      state: "Выполнить",
      tag: "Тег1, Тег2",
    };

    expect((await storage.read()).length).toBe(4);

    await storage.delete(4);
    expect((await storage.read()).length).toBe(3);

    await storage.delete(3);
    expect((await storage.read()).length).toBe(2);

    await storage.delete(2);
    expect((await storage.read()).length).toBe(1);

    await storage.delete(1);
    expect(await storage.read(1)).toBe(undefined);
  });
});
