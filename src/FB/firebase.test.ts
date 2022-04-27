import Firebase from "./firebase";

const firebase = new Firebase("Tasks");

const newTaskData0 = {
    id: 0,
    message: "Meeting with friends",
    date: "25.04.2022 18:00:00",
    state: "0",
    tag: "Meeting"
}

const newTaskData1 = {
    id: 1,
    message: "Go to the cinema",
    date: "28.04.2022 18:00:00",
    state: "0",
    tag: "Cinema"
}

const newTask = {
    0: newTaskData0,
    1: newTaskData1
};



describe("Firebase", () => {
    it("Method create", async () => {
      await firebase.create(newTask);
      //expect(await firebase.read(0)).toEqual(newTaskData0);
    });

    // it("Method read", async () => {
        // const data = await firebase.read(0);
        // expect(data[0]).toEqual(newTaskData0);
    // });

    // it("Method update", async () => {
    //     await firebase.update(updateTask, 7);
    //     const data = await firebase.read(7);
    //     expect(data[0].tag).toBe("Cinema");
    // });
    
    // it("Method delete", async () => {
    //     await firebase.delete(7);
    //     const data = await firebase.read(7);
    //     expect(data[0].tag).toBe("undefined");
    // });
});