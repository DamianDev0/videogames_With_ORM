"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const userServices_1 = __importDefault(require("../services/userServices"));
class UserController {
    static async getAllUsers(_, res) {
        const userService = tsyringe_1.container.resolve(userServices_1.default);
        const users = await userService.getAllUsers();
        res.json(users);
    }
    static async getUserById(req, res) {
        const userService = tsyringe_1.container.resolve(userServices_1.default);
        const user = await userService.getUserById(parseInt(req.params.id));
        res.json(user);
    }
    static async createUser(req, res) {
        try {
            const userService = tsyringe_1.container.resolve(userServices_1.default);
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            console.error("Error creating user:", error);
            res.status(400).json({ message: 'error bro' });
        }
    }
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const userService = tsyringe_1.container.resolve(userServices_1.default);
            const token = await userService.getUserByEmail(email, password);
            res.status(200).json({
                status: 200,
                message: 'Logged in successfully',
                token,
            });
        }
        catch (error) {
            console.error("Login error:", error);
            res.status(401).json({ message: 'Cannot access the page' });
        }
    }
}
exports.default = UserController;
