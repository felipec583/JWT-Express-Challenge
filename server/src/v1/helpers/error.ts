import { errors } from "../config/dictionary.js";
import { CustomError } from "../types/types";

class GlobalError extends Error implements CustomError {
  constructor(
    public message: string | "",
    public statusCode: number,
    public code?: string | undefined
  ) {
    super(message);
  }

  checkCode(code: string | undefined) {
    const error = errors.get(code as string);
    if (typeof code === "string" && error) {
      this.message = error.message;
      this.statusCode = error.statusCode;
    } else {
      this.message = this.message;
      this.statusCode = this.statusCode;
    }
  }
}


const createNewError = (
  code?: string | undefined,
  statusCode: number = 400,
  message: string = ""
) => {
  const error = new GlobalError(message, statusCode, code);
  error.checkCode(code);
  return error;
};

export { createNewError, GlobalError };
