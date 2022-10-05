import {Model, DataTypes} from "sequelize";
import db from "../config/data/database.config";

interface IExpenses {
    id: number;
    name: string;
    payments: boolean;
    paymentsCount: number;
};

export class expensesTable extends Model<IExpenses> {};

expensesTable.init(
    {
    id: {
        type: DataTypes.UUIDV4,
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