import UserServices from "./UserServices";

describe("User Services", () => {
    it("can save all users into local storage", async () => {
        await UserServices.storeUsersInLocalStorage();

        expect(localStorage.getItem("all_users")).toBeTruthy();
    })

    it("can save all users into local storage - but now with Mocks!", async () => {
        UserServices.getAllUsers = jest.fn().mockResolvedValue([{
            name: "Beatrice",
            age: 51
        }])

        await UserServices.storeUsersInLocalStorage();

        const usersInLocalStorage = JSON.parse(localStorage.getItem("all_users"));

        expect(usersInLocalStorage[0]).toEqual(expect.objectContaining({name: "Beatrice"}));
    })
})
