import express, {Request, Response} from "express";
import db from './config/data/database.config';

db.sync().then(() => {console.log("connecting to db")});
const port = 3000;
const app = express();

app.listen(port, () => console.log('server is listening on port ' + port));