import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { userRoutes } from '@/infra/http/express/routes/user.routes';
import UserController from '@/controllers/UserController';
import swaggerDocument from '@/infra/http/express/swagger.config';

export default class ExpressApp {
    static start(userController: UserController) {
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        app.use(userRoutes(userController));

        app.listen(process.env.API_PORT);
    }
}