import UserServices from './UserServices';

const replacement = class FakeUserServices {
    static getUser() {
        return {name: 'Fake User', age: 34};
    }

    static async storeUserInLocalStorage() {
        const users = await FakeUserServices.getUser();

        localStorage.setItem('user', JSON.stringify(users));
    }
};

describe('User Services', () => {
    afterEach(() => {
        jest.clearAllMocks();  // <- Why isn't this causing any change?
    });

    it.skip(
        'This test is broken, because UserServices was brought by the import statement (hoisted)',
        async () => {
            jest.doMock('./UserServices', () => ( {
                __esModule: true,
                default: replacement,
            } ));

            await UserServices.storeUserInLocalStorage();

            const userInLocalStorage = JSON.parse(localStorage.getItem('user'));

            expect(userInLocalStorage).
                toEqual(expect.objectContaining({name: 'Fake User'}));
        });

    it('can save user into local storage', async () => {
        jest.doMock('./UserServices', () => ( {
            __esModule: true,
            default: replacement,
        } ));

        const UserServices = require('./UserServices').default;

        await UserServices.storeUserInLocalStorage();

        const userInLocalStorage = JSON.parse(localStorage.getItem('user'));

        expect(userInLocalStorage).
            toEqual(expect.objectContaining({name: 'Fake User'}));
    });

    // Question to the group
    it('still passes if I run the same test twice in a row', async () => {
        const UserServices = require('./UserServices').default;

        await UserServices.storeUserInLocalStorage();

        const userInLocalStorage = JSON.parse(localStorage.getItem('user'));

        expect(userInLocalStorage).
            toEqual(expect.objectContaining({name: 'Real User'}));
    });
});
