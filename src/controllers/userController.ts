import { Request, Response } from "express";
import { container } from "tsyringe";
import UserService from "../services/userServices";

export default class UserController {
  static async getAllUsers(_: Request, res: Response) {
    const userService = container.resolve(UserService);
    const users = await userService.getAllUsers();
    res.json(users);
  }

  static async getUserById(req: Request, res: Response) {
    const userService = container.resolve(UserService);
    const user = await userService.getUserById(parseInt(req.params.id));
    res.json(user);
  }

  static async createUser(req: Request, res: Response) {
    try {
      const userService = container.resolve(UserService);
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).json({ message:'error bro' });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const userService = container.resolve(UserService);
      const token = await userService.getUserByEmail(email, password);
      res.status(200).json({
        status:200,
        message: 'Logged in successfully',
        token,
       });
    } catch (error) {
      console.error("Login error:", error);
      res.status(401).json({ message: 'Cannot access the page' });
    }
  }
  }