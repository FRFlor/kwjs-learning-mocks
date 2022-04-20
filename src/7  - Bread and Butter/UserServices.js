export default class UserServices {
    static getAllUsers() {
        return new Promise(resolve => setTimeout(() => resolve([
            {
                name: "Bob",
                age: 34
            },
            {
                name: "Joe",
                age: 26
            }
        ]), 2000));
    }

    static async storeUsersInLocalStorage() {
        const users = await UserServices.getAllUsers();

        localStorage.setItem("all_users", JSON.stringify(users));
    }
}
