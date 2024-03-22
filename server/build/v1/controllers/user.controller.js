var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as userModel from "../models/user.model.js";
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel.getAll();
        if (!users)
            return res.status(204).send({ "No users": users });
        res.status(200).json(users);
    }
    catch (error) {
        next(error);
    }
});
const getOne = (req, res, next) => {
    try {
        const { id } = req.params;
    }
    catch (error) {
        next(error);
    }
};
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const newUser = yield userModel.create(user);
        console.log(newUser);
        res.status(200).send({ "New user": `${newUser.email}` });
    }
    catch (error) {
        next(error);
    }
});
export { create, getAll, getOne };
//# sourceMappingURL=user.controller.js.map