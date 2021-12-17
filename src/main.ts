import ExpressApp from "@/infra/http/express/ExpressApp";
import UserRepositoryPostgresql from "@/infra/repositories/postgresql/UserRepositoryPostgresql";
import UserController from '@/controllers/UserController';

const userRepository = new UserRepositoryPostgresql();
userRepository.connectToDatabase()
    .then(() => {
        const userController = new UserController(userRepository);
        ExpressApp.start(userController);
    });