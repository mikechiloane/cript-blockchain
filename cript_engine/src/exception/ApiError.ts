import BaseError from "./BaseError";
import {HttpStatusCode} from "../config/types";

class APIError extends BaseError {
  constructor(name:string, httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true, description = 'internal server error') {
    super(name, httpCode, description, isOperational);
  }
}

export default APIError;