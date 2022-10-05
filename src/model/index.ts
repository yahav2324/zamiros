import {Model, DataTypes} from "sequelize";
import db from "../config/data/database.config";

interface ITodoExpenses {
    id: number;
    name: string;
    payments: boolean;
    paymentsCount: number;
};

export class TodoExpenses extends Model<ITodoExpenses> {};

TodoExpenses.init(
    {
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    payments: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        },
    paymentsCount: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0,
        },
},         
{
    sequelize: db,
    tableName: 'expenses',
}
);