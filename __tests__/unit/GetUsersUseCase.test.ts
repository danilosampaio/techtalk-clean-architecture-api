import GetUsersUseCase from "@/domain/useCases/GetUsersUseCase";
import UserRepositoryMemory from '@/infra/repositories/memory/UserRepositoryMemory';

let getUsersUseCase: GetUsersUseCase;
let userRepositoryMemory: UserRepositoryMemory;

beforeAll(() => {
    userRepositoryMemory = new UserRepositoryMemory();
    getUsersUseCase = new GetUsersUseCase(userRepositoryMemory);
});

describe('GetUsersUseCase - memory', () => {
    test('should users from repository', async () => {
        const users = await getUsersUseCase.execute();
        expect(users).toEqual([]);
    });
});