var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createNewError } from "../helpers/error.js";
const loginFormValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            throw createNewError("auth_4");
        next();
    }
    catch (error) {
        next(error);
    }
});
const registrationFormValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const keys = ["email", "password", "rol", "lenguaje"];
        const userKeyCheck = Object.keys(user).every((key) => keys.includes(key));
        const userLength = Object.keys(user).length;
        const userValuesCheck = Object.values(user).every((value) => value);
        if (!(userKeyCheck && keys.length === userLength && userValuesCheck)) {
            throw createNewError("auth_5");
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
export { registrationFormValidator, loginFormValidator };
//# sourceMappingURL=auth.handler.js.map