import express from 'express';
import { userRoutes } from '@/infra/http/express/routes/user.routes';
import UserController from '@/controllers/UserController';

export default class ExpressApp {
    static start(userController: UserController) {
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use(userRoutes(userController));

        app.listen(process.env.API_PORT);
    }
}