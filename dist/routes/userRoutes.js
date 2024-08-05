"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../middlewares/authMiddleware");
const userController_1 = __importDefault(require("../controllers/userController"));
exports.userRouter = express_1.default.Router();
exports.userRouter.get('/', authMiddleware_1.authenticateJWT, userController_1.default.getAllUsers);
exports.userRouter.get('/:id', authMiddleware_1.authenticateJWT, userController_1.default.getUserById);
exports.userRouter.post('/', userController_1.default.createUser);
exports.userRouter.post('/login', userController_1.default.login);
