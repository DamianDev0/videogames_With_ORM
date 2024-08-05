import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    HasMany
} from "sequelize-typescript";
import { Game } from "./game";  // Asegúrate de importar el modelo Game

@Table({
    tableName: "developers",
    timestamps: false,
})
export class Developer extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    country!: string;

    @HasMany(() => Game, { foreignKey: 'developer_id' })
    games!: Game[];
}
