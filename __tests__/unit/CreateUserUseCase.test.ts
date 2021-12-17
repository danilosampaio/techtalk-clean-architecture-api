import CreateUserUseCase from "@/domain/useCases/CreateUserUseCase";
import UserRepositoryMemory from '@/infra/repositories/memory/UserRepositoryMemory';

let createUserUseCase: CreateUserUseCase;
let userRepositoryMemory: UserRepositoryMemory;

beforeAll(() => {
    userRepositoryMemory = new UserRepositoryMemory();
    createUserUseCase = new CreateUserUseCase(userRepositoryMemory);
});

describe('CreateUserUseCase - memory', () => {
    test('should create a new user', async () => {
        const newUser = await createUserUseCase.execute('danilo', 'danilo@test', '123456');
        expect(newUser.name).toBe('danilo');
    });
});