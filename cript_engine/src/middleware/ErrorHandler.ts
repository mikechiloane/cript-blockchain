import BaseError from "../exception/BaseError";
import {NextFunction, Request, Response} from "express";

class ErrorHandler {


    public logErrorMiddleware (err:Error, req:Request, res:Response, next:NextFunction) {
        console.log(err.name)
        next(err)
    }

    public returnError (err:BaseError, req:Request, res:Response, next:NextFunction) {
        return res.status(err.httpCode).json({
            status: 'error',
            name: err.name,
            message: err.message,
        })
    }


}
export const errorHandler = new ErrorHandler();