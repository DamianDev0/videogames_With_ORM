"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const sequelize = new sequelize_typescript_1.Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'damian45d5',
    database: 'joji_games',
    models: [models_1.Game, models_1.Developer, models_1.User], // Añade todos tus modelos aquí
});
// Sincroniza los modelos con la base de datos
// sequelize.sync({ alter: true }) // Usar `alter: true` para ajustar la base de datos al esquema de modelos
//     .then(() => {
//         console.log('Database & tables created or updated!');
//     })
//     .catch((error) => {
//         console.error('Error syncing database:', error);
//     });
exports.default = sequelize;
