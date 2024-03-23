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
        if (isEmpty(user))
            throw createNewError("", 400, "You must enter the data");
        if (isValidUser(user)) {
            next();
        }
        throw createNewError("auth_5");
    }
    catch (error) {
        next(error);
    }
});
function isEmpty(user) {
    const userKeys = Object.keys(user);
    return userKeys.length === 0;
}
function isValidUser(user) {
    const requiredFields = ["email", "password", "rol", "lenguaje"];
    const userKeys = Object.keys(user);
    if (userKeys.length !== requiredFields.length) {
        return false;
    }
    for (const key of userKeys) {
        if (!requiredFields.includes(key))
            return false;
        if (!user[key])
            return false;
    }
    return true;
}
export { registrationFormValidator, loginFormValidator };
//# sourceMappingURL=auth.handler.js.map