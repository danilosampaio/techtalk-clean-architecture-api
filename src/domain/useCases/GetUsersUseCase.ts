import IUserRepository from "@/domain/repositories/IUserRepository";
import User from "@/domain/entities/User";

export default class GetUsersUseCase {
    userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(): Promise<User[]> {
        //TODO: validation
        return await this.userRepository.getUsers();
    }
}