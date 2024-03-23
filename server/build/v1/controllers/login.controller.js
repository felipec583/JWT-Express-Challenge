var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { checkCredentials } from "../models/user.model.js";
import { SECRET_KEY } from "../config/keys.js";
import jwt from "jsonwebtoken";
const handleLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        yield checkCredentials({ email, password });
        const accessToken = jwt.sign({ email }, SECRET_KEY, {
            expiresIn: "1h",
        });
        console.log("token:", accessToken);
        res.status(200).send({ token: accessToken });
    }
    catch (error) {
        next(error);
    }
});
export default handleLogin;
//# sourceMappingURL=login.controller.js.map