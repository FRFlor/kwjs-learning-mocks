import UserServices from './UserServices';

describe("User Services", () => {
    it("can save all users into local storage", async () => {
        await UserServices.storeUserInLocalStorage();

        expect(localStorage.getItem('user')).toBeTruthy();
    })

    it("can save all users into local storage - but now with Mocks!", async () => {
        UserServices.getUser = jest.fn().mockResolvedValue({
            name: 'Beatrice',
            age: 51,
        });

        await UserServices.storeUserInLocalStorage();

        const userInLocalStorage = JSON.parse(localStorage.getItem('user'));

        expect(userInLocalStorage).
            toEqual(expect.objectContaining({name: 'Beatrice'}));
    })
})
