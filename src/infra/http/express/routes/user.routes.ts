import { Router } from "express";
import UserController from "@/controllers/UserController";

/**
 * @swagger
 *  tags:
 *      name: Users
 *      description: Users endpoints
 */

/**
 * @swagger 
 *  components:
 *      schemas:
 *          createUser:
 *              type: object
 *              required:
 *                 - name
 *                 - email
 *                 - password
 *              properties:
 *                  name:
 *                      type: string
 *                      description: user name.
 *                  email:
 *                      type: string
 *                      description: user email.
 *                  password:
 *                      type: string
 *                      description: user password.
 *              example:
 *                  {
 *                      name: "john",
 *                      email: "john@gmail.com",
 *                      password: "123456"
 *                  }
 */

export function userRoutes (userController: UserController) {
    const router = Router();

    /**
     * @swagger
     * /users:
     *  get:
     *      tags: [Users]
     *      description: Use to users from database
     *      responses:
     *          '200':
     *              description: A successful response
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              id:
     *                                  type: string
     *                                  description: user id
     *                              name:
     *                                  type: string
     *                                  description: user name
     *                              email:
     *                                  type: string
     *                                  description: user email
     *                              password:
     *                                  type: string
     *                                  description: user password
     *                          example:
     *                              {
     *                                  id: '123456789123456789',
     *                                  name: 'john',
     *                                  email: 'john@gmail.com',
     *                                  password: '123456'
     *                              }
     *          '500':
     *              description: Something internally went wrong
     */
    router.get('/users', async (req, res) => {
        const users = await userController.getUsers();
        res.status(200).json(users);
    });

    /**
     * @swagger
     * /user:
     *  post:
     *      tags: [Users]
     *      description: Use to create a new user
     *      requestBody:
     *              required: true
     *              content:
     *                  application/json:
     *                      schema:
     *                          $ref: '#/components/schemas/createUser'
     *      responses:
     *          '201':
     *              description: A successful response
     *              content:
     *                  application/json:
     *                      schema:
     *                          type: object
     *                          properties:
     *                              id:
     *                                  type: string
     *                                  description: user id
     *                              name:
     *                                  type: string
     *                                  description: user name
     *                              email:
     *                                  type: string
     *                                  description: user email
     *                              password:
     *                                  type: string
     *                                  description: user password
     *                          example:
     *                              {
     *                                  id: '123456789123456789',
     *                                  name: 'john',
     *                                  email: 'john@gmail.com',
     *                                  password: '123456'
     *                              }
     *          '409': 
     *              description: Conflit
     *          '500':
     *              description: Something internally went wrong
     */
    router.post('/user', async (req, res, next) => {
        const user = await userController.createUser({ body: req.body });
        res.status(201).json(user);
    });

    return router;
}