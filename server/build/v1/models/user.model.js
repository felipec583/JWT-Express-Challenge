var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import pool from "../config/database.js";
import bcrypt from "bcrypt";
import format from "pg-format";
import { createNewError } from "../helpers/error.js";
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sqlQuery = {
            text: "SELECT id, email, rol, lenguaje FROM usuarios",
        };
        const users = yield pool.query(sqlQuery);
        return users.rows;
    }
    catch (error) {
        console.log(error);
    }
});
const getOneBy = (identifier, value) => __awaiter(void 0, void 0, void 0, function* () {
    const sqlQuery = {
        text: format("SELECT * FROM usuarios WHERE %I = %L", identifier, value),
    };
    const user = yield pool.query(sqlQuery);
    return user.rows[0];
});
const create = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, rol, lenguaje } = user;
        const hashedPassword = yield bcrypt.hash(password, 10);
        const sqlQuery = {
            text: "INSERT INTO usuarios (email, password, rol, lenguaje) VALUES ($1, $2, $3, $4) RETURNING *",
            values: [email, hashedPassword, rol, lenguaje],
        };
        const newUser = yield pool.query(sqlQuery);
        return newUser.rows[0];
    }
    catch (error) {
        throw createNewError(error.code);
    }
});
const checkCredentials = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const { password: userPassword } = yield getOneBy("email", email);
    const passwordComparison = yield bcrypt.compare(password, userPassword);
    const sqlQuery = {
        text: "SELECT * FROM usuarios WHERE email = $1",
        values: [email],
    };
    const query = yield pool.query(sqlQuery);
    if (!passwordComparison || !query.rowCount)
        throw createNewError("auth_1");
});
export { getAll, getOneBy, create, checkCredentials };
//# sourceMappingURL=user.model.js.map