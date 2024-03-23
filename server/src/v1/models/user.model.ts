import { User, LoginCredentialsI, Credentials } from "../types/types";
import pool from "../config/database.js";
import bcrypt from "bcrypt";
import format from "pg-format";
import { createNewError } from "../helpers/error.js";

const getAll = async () => {
  try {
    const sqlQuery = {
      text: "SELECT id, email, rol, lenguaje FROM usuarios",
    };
    const users = await pool.query(sqlQuery);

    return users.rows;
  } catch (error: any) {
    console.log(error);
  }
};

const getOneBy = async (identifier: string, value: string) => {
  const sqlQuery = {
    text: format("SELECT * FROM usuarios WHERE %I = %L", identifier, value),
  };
  const user = await pool.query(sqlQuery);
  return user.rows[0];
};

const create = async (user: User) => {
  try {
    const { email, password, rol, lenguaje } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sqlQuery = {
      text: "INSERT INTO usuarios (email, password, rol, lenguaje) VALUES ($1, $2, $3, $4) RETURNING *",
      values: [email, hashedPassword, rol, lenguaje],
    };
    const newUser = await pool.query(sqlQuery);
    return newUser.rows[0];
  } catch (error: any) {
    throw createNewError(error.code);
  }
};

const checkCredentials = async ({ email, password }: Credentials) => {
  const { password: userPassword } = await getOneBy("email", email);
  const passwordComparison = await bcrypt.compare(password, userPassword);
  const sqlQuery = {
    text: "SELECT * FROM usuarios WHERE email = $1",
    values: [email],
  };
  const query = await pool.query(sqlQuery);
  if (!passwordComparison || !query.rowCount) throw createNewError("auth_1");
};

export { getAll, getOneBy, create, checkCredentials };
