import express, {Request, Response} from "express";
import expenseValidator from "./validator/expenses";
import db from './config/data/database.config';
import {v4  as uuidv4} from 'uuid';
import { expensesTable } from "./model/expenses";
import Middleware from './middleware/handleValidation'
import { Op } from "sequelize";

db.sync().then(() => {console.log("connecting to db")});
const port = 3001;
const app = express();

app.use(express.json());

app.post("/expense",
    Middleware.handleValidationError,
    expenseValidator.checkCreateExpense(),
    async (req: Request, res: Response) => {
    const id = uuidv4();
    try {
    const record = await expensesTable.create({ ...req.body, id});
    return res.json({record, msg: 'successfully create todo'});
    }catch(e){
        return res.json({msg: "fail to create", status: 500, route: '/expense'})
    }
});

app.get('/expense', async (req: Request, res: Response) => {
    const limit= req.query?.limit as number | undefined;
    const query = req.query?.query as string | undefined;
    try{
        const records = await expensesTable.findAll({where: {name:{[Op.like]: `%${query}%`}} , limit: limit || 10 });
        return res.json(records);
    }catch(e){
        return res.json({msg: "fail to read", status: 500, route: '/expense'})
    }
});

app.listen(port, () => console.log('server is listening on port ' + port));