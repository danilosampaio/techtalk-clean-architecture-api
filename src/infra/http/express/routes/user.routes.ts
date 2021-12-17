import { Router } from "express";
import UserController from "@/controllers/UserController";

export function userRoutes (userController: UserController) {
    const router = Router();

    router.get('/users', async (req, res) => {
        const users = await userController.getUsers();
        res.status(200).json(users);
    });

    router.post('/user', async (req, res, next) => {
        const user = await userController.createUser({ body: req.body });
        res.status(201).json(user);
    });

    return router;
}