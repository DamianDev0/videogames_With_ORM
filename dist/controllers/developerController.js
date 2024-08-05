"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const developerServices_1 = __importDefault(require("../services/developerServices"));
class DeveloperController {
    static async getAllDeveloper(_, res) {
        const developerService = tsyringe_1.container.resolve(developerServices_1.default);
        const developers = await developerService.getAllDevelopers();
        res.status(200).json({
            status: 200,
            message: "All developers were successfully retrieved",
            data: developers,
        });
    }
    static async getDeveloperById(req, res) {
        const developersServices = tsyringe_1.container.resolve(developerServices_1.default);
        const id = parseInt(req.params.id);
        const developer = await developersServices.getDeveloperById(id);
        if (developer) {
            res.status(200).json({
                status: 200,
                message: "Developer was successfully retrieve",
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: "Developer not found",
            });
        }
    }
    static async createDeveloper(req, res) {
        const developerService = tsyringe_1.container.resolve(developerServices_1.default);
        const developer = await developerService.createDeveloper(req.body);
        res.status(201).json({
            status: 201,
            message: "Developer was successfully created",
            data: developer,
        });
    }
}
exports.default = DeveloperController;
