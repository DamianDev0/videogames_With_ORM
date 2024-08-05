"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.developerRouter = void 0;
const express_1 = require("express");
const developerController_1 = __importDefault(require("../controllers/developerController"));
exports.developerRouter = (0, express_1.Router)();
exports.developerRouter.get('/', developerController_1.default.getAllDeveloper);
exports.developerRouter.get('/:id', developerController_1.default.getDeveloperById);
exports.developerRouter.post('/', developerController_1.default.createDeveloper);
