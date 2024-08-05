"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const gameRepository_1 = __importDefault(require("../repositories/gameRepository"));
const developersRepository_1 = __importDefault(require("../repositories/developersRepository"));
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const gameServices_1 = __importDefault(require("../services/gameServices"));
const developerServices_1 = __importDefault(require("../services/developerServices"));
const userServices_1 = __importDefault(require("../services/userServices"));
//repositories
tsyringe_1.container.registerSingleton(gameRepository_1.default);
tsyringe_1.container.registerSingleton(developersRepository_1.default);
tsyringe_1.container.registerSingleton(userRepository_1.default);
//services
tsyringe_1.container.registerSingleton(gameServices_1.default);
tsyringe_1.container.registerSingleton(developerServices_1.default);
tsyringe_1.container.registerSingleton(userServices_1.default);
