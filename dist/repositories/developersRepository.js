"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const developers_1 = require("../models/developers");
let DeveloperRepository = class DeveloperRepository {
    async findAll() {
        return await developers_1.Developer.findAll();
    }
    async findById(id) {
        return await developers_1.Developer.findByPk(id);
    }
    async create(developer) {
        return await developers_1.Developer.create(developer);
    }
    async update(id, developer) {
        const developerToUpdate = await developers_1.Developer.findByPk(id);
        if (!developerToUpdate) {
            throw new Error('Developer not found');
        }
        return await developerToUpdate.update(developer);
    }
    async delete(id) {
        const developerToDelete = await developers_1.Developer.findByPk(id);
        if (!developerToDelete) {
            throw new Error('Developer not found');
        }
        return await developerToDelete.destroy();
    }
};
DeveloperRepository = __decorate([
    (0, tsyringe_1.injectable)()
], DeveloperRepository);
exports.default = DeveloperRepository;
