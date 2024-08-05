"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const game_1 = require("../models/game");
let GameRepository = class GameRepository {
    async findAll() {
        return await game_1.Game.findAll();
    }
    async findById(id) {
        return await game_1.Game.findByPk(id);
    }
    async create(game) {
        return await game_1.Game.create(game);
    }
    async update(id, updates) {
        const game = await this.findById(id);
        if (!game)
            throw new Error('Game not found');
        return await game.update(updates);
    }
    async delete(id) {
        const game = await this.findById(id);
        if (!game)
            throw new Error('Game not found');
        return await game.destroy();
    }
};
GameRepository = __decorate([
    (0, tsyringe_1.injectable)()
], GameRepository);
exports.default = GameRepository;
