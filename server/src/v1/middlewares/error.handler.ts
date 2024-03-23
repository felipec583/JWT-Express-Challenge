import { ControllerType, ErrorHandlerT, CustomError } from "../types/types";
import { GlobalError } from "../helpers/error.js";

const errorHandler: ErrorHandlerT = (error, req, res, next) => {
  if (error instanceof GlobalError) {
    return res.status(error.statusCode).send(error.message);
  } else {
    return res.status(401).send(error.message);
  }
};

export default errorHandler;
