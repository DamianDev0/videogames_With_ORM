import { Router } from "express";
import GameController from "../controllers/gameController";

export const gameRouter = Router();

gameRouter.get("/", GameController.getAllGames);
gameRouter.get("/:id", GameController.getGameById);
gameRouter.post("/", GameController.createGame);
gameRouter.put("/:id", GameController.updateGame);
gameRouter.delete("/:id", GameController.deleteGame);
