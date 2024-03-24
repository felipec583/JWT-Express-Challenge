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

    if (isEmpty(user)) throw createNewError("", 400, "You must enter the data");

    if (!isValidUser(user)) {
      throw createNewError("auth_5");
    }
    next();
  } catch (error) {
    next(error);
  }
};

function isEmpty(user: User) {
  const userKeys = Object.keys(user);
  return userKeys.length === 0;
}

function isValidUser(user: User) {
  const requiredFields = ["email", "password", "rol", "lenguaje"];
  const userKeys = Object.keys(user);

  if (userKeys.length !== requiredFields.length) {
    return false;
  }

  for (const key of userKeys) {
    if (!requiredFields.includes(key)) {
      return false;
    }

    if (!user[key as keyof User]) {
      return false;
    }
  }

  return true;
}

export { registrationFormValidator, loginFormValidator };
