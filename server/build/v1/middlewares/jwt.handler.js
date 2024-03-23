var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SECRET_KEY } from "../config/keys.js";
import { ServerResponse } from "http";
import jwt from "jsonwebtoken";
import { createNewError } from "../helpers/error.js";
const verifyJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = verifyAutheader(req, res);
        if (result instanceof ServerResponse) {
            return result;
        }
        const { authHeader } = result;
        const token = authHeader.split(" ")[1];
        console.log("verify:", authHeader.split(" "));
        if (!token)
            throw createNewError("", 401, "There is no token");
        const decodedToken = jwt.verify(token, SECRET_KEY);
        req.email = decodedToken.email;
        console.log(decodedToken.email, decodedToken);
        next();
    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
});
const verifyAutheader = (req, res) => {
    var _a;
    const authHeader = req.headers.authorization || ((_a = req.headers) === null || _a === void 0 ? void 0 : _a.Authorization);
    if (!authHeader) {
        throw createNewError("auth_2");
    }
    else {
        return { authHeader };
    }
};
export { verifyJWT };
//# sourceMappingURL=jwt.handler.js.map