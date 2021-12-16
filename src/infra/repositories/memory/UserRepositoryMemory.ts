import User from "@/domain/entities/User";
import IUserRepository from "@/domain/repositories/IUserRepository";

export default class UserRepositoryMemory implements IUserRepository {
    users: User[] = [];

    async createUser(name: string, email: string, password: string): Promise<User> {
        const newUser = new User(name, email, password);
        this.users.push(newUser);
        return newUser;
    }

    async getUsers(): Promise<User[]> {
        return this.users;
    }
}