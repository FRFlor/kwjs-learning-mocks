export default class UserServices {
    static getUser() {
        return new Promise(resolve => setTimeout(() => resolve(
            {
                name: 'Real User',
                age: 34,
            },
        ), 2000));
    }

    static async storeUserInLocalStorage() {
        const user = await UserServices.getUser();

        localStorage.setItem('user', JSON.stringify(user));
    }
}
