import {Model, DataTypes} from "sequelize";
import db from "../config/data/database.config";

interface IExpenses {
    id: number;
    name: string;
    price: number;
    date: string;
    count: number;
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
    count: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 1,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: new Date().toLocaleDateString("en-US"),
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