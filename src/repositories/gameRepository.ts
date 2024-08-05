import { injectable } from 'tsyringe';
import { Game } from '../models/game';

@injectable()
export default class GameRepository {
    async findAll() {
        return await Game.findAll();
    }

    async findById(id: number) {
        return await Game.findByPk(id);
    }

    async create(game: Partial<Game>) {
        return await Game.create(game);
    }
    
    async update(id: number, updates: Partial<Game>) {
        const game = await this.findById(id);
        if (!game) throw new Error('Game not found');
        return await game.update(updates);
    }

    async delete(id: number) {
        const game = await this.findById(id);
        if (!game) throw new Error('Game not found');
        return await game.destroy();
    }
}
