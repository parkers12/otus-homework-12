import Firebase from "./firebase";

const firebase = new Firebase("Tasks");

const newTaskData0 = {
  id: 0,
  message: "Meeting with friends",
  date: "25.04.2022 18:00:00",
  state: "0",
  tag: "Meeting",
};

const newTaskData1 = {
  id: 1,
  message: "Go to the cinema",
  date: "28.04.2022 18:00:00",
  state: "0",
  tag: "Cinema",
};

const updateTask = {
  id: 1,
  message: "To water flowers",
  date: "25.04.2022 18:00:00",
  state: "1",
  tag: "Home",
};

const newTask = {
  0: newTaskData0,
  1: newTaskData1,
};

describe("Firebase", () => {
  it("Method create", async () => {
    await firebase.create(newTask);
    const arr = [newTaskData0];
    expect(await firebase.read(0)).toEqual(arr);
    expect((await firebase.read()).length).toBe(2);
  });

  it("Method read", async () => {
    const data = await firebase.read(0);
    expect(data[0]).toEqual(newTaskData0);

    expect((await firebase.read()).length).toBe(2);
  });

  it("Method update", async () => {
    await firebase.update(updateTask, 1);
    const data = await firebase.read(1);
    expect(data[0]).toEqual(updateTask);
  });

  it("Method delete", async () => {
    expect((await firebase.read()).length).toBe(2);
    await firebase.delete(1);
    expect((await firebase.read()).length).toBe(1);
  });
});
