export default class User {
    name: string;
    email: string;
    password: string;

    constructor (name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}