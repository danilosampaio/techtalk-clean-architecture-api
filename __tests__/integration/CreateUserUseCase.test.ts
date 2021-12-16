import CreateUserUseCase from "@/domain/useCases/CreateUserUseCase";
import User from "@/infra/repositories/postgresql/entities/User";
import UserRepositoryPostgresql from '@/infra/repositories/postgresql/UserRepositoryPostgresql';

let createUserUseCase: CreateUserUseCase;
let userRepositoryPostgresql: UserRepositoryPostgresql;

beforeAll(async () => {
    userRepositoryPostgresql = new UserRepositoryPostgresql();
    await userRepositoryPostgresql.connectToDatabase();
    createUserUseCase = new CreateUserUseCase(userRepositoryPostgresql);
});

beforeEach(async () => {
    UserRepositoryPostgresql.connection.manager.clear(User);
});

afterAll(async () => {
    await userRepositoryPostgresql.disconnect();
})

describe('CreateUserUseCase', () => {
    test('should create a new user', async () => {
        const newUser = await createUserUseCase.execute('danilo', 'danilo@test', '123456');
        expect(newUser.name).toBe('danilo');
    });
});