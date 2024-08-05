import { Sequelize } from 'sequelize-typescript';
import { Game, Developer, User } from '../models';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'damian45d5',
    database: 'joji_games',
    models: [Game, Developer, User], // Añade todos tus modelos aquí
});

// Sincroniza los modelos con la base de datos
// sequelize.sync({ alter: true }) // Usar `alter: true` para ajustar la base de datos al esquema de modelos
//     .then(() => {
//         console.log('Database & tables created or updated!');
//     })
//     .catch((error) => {
//         console.error('Error syncing database:', error);
//     });

export default sequelize;
