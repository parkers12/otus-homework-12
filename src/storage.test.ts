import { Storage } from "./storage";

const calendar = new Storage();

describe("Test storage", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test("Method create", () => {
        const tasks = [
            {
                "id": 1,
                "message": "Сообщение1",
                "date": "10.03.2022",
                "state": "Выполнить",
                "tag": "Тег1, Тег2"
            },
            {
                "id": 2,
                "message": "Сообщение2",
                "date": "11.03.2022",
                "state": "Выполняется",
                "tag": "Тег2"
            },
            {
                "id": 3,
                "message": "Сообщение3",
                "date": "12.03.2022",
                "state": "Выполнено",
                "tag": "Тег1"
            }
        ]
        // localStorage.removeItem("tasks");
        // const localTasksBefore =
        //     JSON.parse(localStorage.getItem("tasks") as string);
        // expect(localTasksBefore).toBe(null);

        calendar.create(tasks);

        const localTasksAfter =
            JSON.parse(localStorage.getItem("tasks") as string);
        expect(localTasksAfter).toBe(tasks);
    });
});
