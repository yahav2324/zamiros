import {Model, DataTypes} from "sequelize";
import db from "../config/data/database.config";

interface ITodoExpenses {
    id: number;
    name: string;
    price: number;
    payments: boolean;
    paymentsCount: number;
};

export class expensesTable extends Model<ITodoExpenses> {};

expensesTable.init(
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
    price: {
        type: DataTypes.NUMBER,
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