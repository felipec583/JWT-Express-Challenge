import { errors } from "../config/dictionary.js";
class GlobalError extends Error {
    constructor(message, statusCode, code) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.code = code;
    }
    checkCode(code) {
        const error = errors.get(code);
        if (typeof code === "string" && error) {
            this.message = error.message;
            this.statusCode = error.statusCode;
        }
        else {
            this.message = this.message;
            this.statusCode = this.statusCode;
        }
    }
}
const createNewError = (code, statusCode = 400, message = "") => {
    const error = new GlobalError(message, statusCode, code);
    error.checkCode(code);
    return error;
};
export { createNewError, GlobalError };
//# sourceMappingURL=error.js.map