import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    ForeignKey,
    BelongsTo
} from "sequelize-typescript";
import { Developer } from "./developers";  // Ajusta el nombre del archivo según corresponda

@Table({
    tableName: "games",
    timestamps: false
})
export class Game extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    description!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    release_date!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    genre!: string; 

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    image_url!: string; 

    @ForeignKey(() => Developer)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    developer_id!: number;

    @BelongsTo(() => Developer)
    developer!: Developer;
}
