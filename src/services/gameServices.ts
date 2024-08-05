import { injectable, inject } from "tsyringe";
import  GameRepository  from "../repositories/gameRepository";
import { Game } from "../models/game";

@injectable()
export default class GameService {
    constructor(@inject(GameRepository) private gameRepository: GameRepository) {}

    async getAllGames(){
        return await this.gameRepository.findAll();
    }

    async getGameById(id: number){
        return await this.gameRepository.findById(id);
    }

    async createGame(game: Partial<Game>){
        return await this.gameRepository.create(game);
    }

    async updateGame(id: number, updates: Partial<Game>){
        return await this.gameRepository.update(id, updates);
    }

    async deleteGame(id: number){
        return await this.gameRepository.delete(id);
    }
}