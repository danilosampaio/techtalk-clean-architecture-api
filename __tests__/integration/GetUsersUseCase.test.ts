import GetUsersUseCase from "@/domain/useCases/GetUsersUseCase";
import User from "@/infra/repositories/postgresql/entities/User";
import UserRepositoryPostgresql from '@/infra/repositories/postgresql/UserRepositoryPostgresql';

let getUsersUseCase: GetUsersUseCase;
let userRepositoryPostgresql: UserRepositoryPostgresql;

beforeAll(async () => {
    userRepositoryPostgresql = new UserRepositoryPostgresql();
    await userRepositoryPostgresql.connectToDatabase();
    getUsersUseCase = new GetUsersUseCase(userRepositoryPostgresql);
});

beforeEach(async () => {
    UserRepositoryPostgresql.connection.manager.clear(User);
});

afterAll(async () => {
    await userRepositoryPostgresql.disconnect();
})

describe('GetUsersUseCase - integration', () => {
    test('should return users from repository', async () => {
        const users = await getUsersUseCase.execute();
        expect(users).toEqual([]);
    });
});