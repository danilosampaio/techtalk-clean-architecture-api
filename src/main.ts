import ExpressApp from "./infra/http/express/ExpressApp";
import UserController from '@/controllers/UserController';
import UserRepositoryPostgresql from "./infra/repositories/postgresql/UserRepositoryPostgresql";

const userRepository = new UserRepositoryPostgresql();
userRepository.connectToDatabase()
    .then(() => {
        const userController = new UserController(userRepository);
        ExpressApp.start(userController);
    });