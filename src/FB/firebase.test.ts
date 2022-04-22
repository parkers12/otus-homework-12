import Firebase from "./firebase";

const firebase = new Firebase();

const newTask = {
    "id": 7,
    "message": "Meeting with friends",
    "date": "25.04.2022 18:00:00",
    "state": "0",
    "tag": "Meeting"
};

const updateTask = {
    "id": 7,
    "message": "Go to the cinema",
    "date": "28.04.2022 18:00:00",
    "state": "0",
    "tag": "Cinema"
};

describe("Firebase", () => {
    it("Method create", async () => {
      await firebase.create(newTask);
      expect(await firebase.read(7)).toEqual(newTask);
    });

    it("Method read", async () => {
        const data = await firebase.read(7);
        expect(data[0].tag).toBe("Meeting");
    });

    it("Method update", async () => {
        await firebase.update(updateTask, 7);
        const data = await firebase.read(7);
        expect(data[0].tag).toBe("Cinema");
    });
    
    it("Method delete", async () => {
        await firebase.delete(7);
        const data = await firebase.read(7);
        expect(data[0].tag).toBe("undefined");
    });
});