import User from "@/domain/entities/User";

export default interface IUserRepository {
    createUser(name: string, email: string, password: string): Promise<User>;
    getUsers(): Promise<User[]>;
}