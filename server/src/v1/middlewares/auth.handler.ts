import { ControllerType, User } from "../types/types";
import { createNewError } from "../helpers/error.js";

const loginFormValidator: ControllerType = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) throw createNewError("auth_4");
    next();
  } catch (error) {
    next(error);
  }
};

const registrationFormValidator: ControllerType = async (req, res, next) => {
  try {
    const user: User = req.body;
    const keys = ["email", "password", "rol", "lenguaje"];
    const userKeyCheck = Object.keys(user).every((key) => keys.includes(key));
    const userLength = Object.keys(user).length;
    const userValuesCheck = Object.values(user).every((value) => value);
    if (!(userKeyCheck && keys.length === userLength && userValuesCheck)) {
      throw createNewError("auth_5");
    }
    next();
  } catch (error) {
    next(error);
  }
};

export { registrationFormValidator, loginFormValidator };
