import express from 'express';
import { authenticateJWT } from '../middlewares/authMiddleware';
import UserController from '../controllers/userController';

export const userRouter = express.Router();

userRouter.get('/', authenticateJWT, UserController.getAllUsers);
userRouter.get('/:id', authenticateJWT, UserController.getUserById);
userRouter.post('/', UserController.createUser);
userRouter.post('/login', UserController.login);

