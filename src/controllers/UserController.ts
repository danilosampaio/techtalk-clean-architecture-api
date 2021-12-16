import IUserRepository from "@/domain/repositories/IUserRepository";
import CreateUserUseCase from "@/domain/useCases/CreateUserUseCase";
import GetUsersUseCase from "@/domain/useCases/GetUsersUseCase";

interface Params {
    body?: {
        name: string;
        email: string;
        password: string;
    }
}

export default class UserController {
    getUsersUseCase: GetUsersUseCase;
    createUserUseCase: CreateUserUseCase;
    
    constructor(userRepository: IUserRepository) {
        this.getUsersUseCase = new GetUsersUseCase(userRepository)
        this.createUserUseCase = new CreateUserUseCase(userRepository);
    }

    async getUsers() {
        return this.getUsersUseCase.execute();
    }

    async createUser(params: Params) {
        const { name, email, password } = params.body;
        return this.createUserUseCase.execute(name, email, password);
    }
};