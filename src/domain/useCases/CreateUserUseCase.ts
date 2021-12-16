import IUserRepository from "@/domain/repositories/IUserRepository";
import User from "@/domain/entities/User";

export default class CreateUserUseCase {
    userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(name: string, email: string, password: string): Promise<User> {
        //TODO: validation
        return await this.userRepository.createUser(name, email, password);
    }
}