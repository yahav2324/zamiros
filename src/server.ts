import express, {Request, Response} from "express";

const port = 3000;
const app = express();

app.listen(port, () => console.log('server is listening on port ' + port));