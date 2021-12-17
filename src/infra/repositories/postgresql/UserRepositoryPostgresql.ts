import "reflect-metadata";
import { Connection, createConnection } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import User from "@/infra/repositories/postgresql/entities/User";
import IUserRepository from "@/domain/repositories/IUserRepository";

export default class UserRepositoryPostgresql implements IUserRepository {
    static connection: Connection;

    async connectToDatabase() {
        UserRepositoryPostgresql.connection = await createConnection({
            type: "postgres",
            host: process.env.POSTGRES_HOST,
            port: +process.env.POSTGRES_PORT,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            entities: [
                User
            ],
            synchronize: true
        });
        console.log('connected to database');
    }

    async disconnect() {
        await UserRepositoryPostgresql.connection.close();
    }

    async createUser(name: string, email: string, password: string): Promise<User> {
        const newUser = new User(uuidv4(), name, email, password);
        return await UserRepositoryPostgresql.connection.manager.save(newUser);
    }

    async getUsers(): Promise<User[]> {
        return await UserRepositoryPostgresql.connection.manager.find(User);
    }

}