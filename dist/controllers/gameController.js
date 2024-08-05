"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const gameServices_1 = __importDefault(require("../services/gameServices"));
const multerConfig_1 = __importDefault(require("../middlewares/multerConfig"));
class GameController {
    static async getAllGames(_, res) {
        const gameService = tsyringe_1.container.resolve(gameServices_1.default);
        const games = await gameService.getAllGames();
        res.status(200).json({
            status: 200,
            message: "All games were successfully retrieved",
            data: games,
        });
    }
    static async getGameById(req, res) {
        const gameService = tsyringe_1.container.resolve(gameServices_1.default);
        const id = parseInt(req.params.id);
        const game = await gameService.getGameById(id);
        if (game) {
            res.status(200).json({
                status: 200,
                message: "Game was successfully retrieved",
                data: game,
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: "Game not found",
            });
        }
    }
    static async createGame(req, res) {
        multerConfig_1.default.single("image")(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    status: 400,
                    message: err.message || "Error uploading the image",
                });
            }
            try {
                const gameService = tsyringe_1.container.resolve(gameServices_1.default);
                const gameData = req.body;
                const imagePath = req.file
                    ? `http://localhost:3000/api/uploads/${req.file.filename}`
                    : null;
                const game = await gameService.createGame({
                    ...gameData,
                    image_url: imagePath,
                });
                res.status(201).json({
                    status: 201,
                    message: "Game was successfully created",
                    data: game,
                });
            }
            catch (error) {
                res.status(500).json({
                    status: 500,
                    message: "Error creating the game",
                });
            }
        });
    }
    static async updateGame(req, res) {
        const gameService = tsyringe_1.container.resolve(gameServices_1.default);
        const id = parseInt(req.params.id);
        const updates = req.body;
        const game = await gameService.updateGame(id, updates);
        if (game) {
            res.status(200).json({
                status: 200,
                message: "Game was successfully updated",
                data: game,
            });
        }
        else {
            res.status(404).json({
                status: 404,
                message: "Game not found",
            });
        }
    }
    static async deleteGame(req, res) {
        const gameService = tsyringe_1.container.resolve(gameServices_1.default);
        const id = parseInt(req.params.id);
        await gameService.deleteGame(id);
        res.status(204).json({
            status: 204,
            message: "Game was successfully deleted",
        });
    }
}
exports.default = GameController;
