"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const express_1 = require("express");
const gameController_1 = __importDefault(require("../controllers/gameController"));
exports.gameRouter = (0, express_1.Router)();
exports.gameRouter.get("/", gameController_1.default.getAllGames);
exports.gameRouter.get("/:id", gameController_1.default.getGameById);
exports.gameRouter.post("/", gameController_1.default.createGame);
exports.gameRouter.put("/:id", gameController_1.default.updateGame);
exports.gameRouter.delete("/:id", gameController_1.default.deleteGame);
