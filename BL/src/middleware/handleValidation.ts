import {validationResult} from 'express-validator';
import { NextFunction, Request, Response} from "express";
class Middleware {
    handleValidationError(req: Request, res: Response, next: NextFunction){
            const error = validationResult(req);
            if(!error.isEmpty()){
                return res.json(error);
            }
            next();
    }
}

export default new Middleware();