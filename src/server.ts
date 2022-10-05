import express, {Request, Response} from "express";
import db from './config/data/database.config';
import {v4  as uuidv4} from 'uuid';
import { expensesTable } from "./model";

db.sync().then(() => {console.log("connecting to db")});
const port = 3000;
const app = express();

app.use(express.json());

app.post("/expense", async (req: Request, res: Response) => {
    const id = uuidv4();
    try {
    const record = await expensesTable.create({ ...req.body, id});
    return res.json({record, msg: 'successfully create todo'});
    }catch(e){
        return res.json({msg: "fail to create", status: 500, route: '/expense'})
    }
});

app.listen(port, () => console.log('server is listening on port ' + port));