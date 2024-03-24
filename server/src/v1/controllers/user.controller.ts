import { ControllerType, User } from "../types/types";
import * as userModel from "../models/user.model.js";

const getAll: ControllerType = async (req, res, next) => {
  try {
    const users = await userModel.getAll();
    if (!users) return res.status(204).send({ "No users": users });
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getOne: ControllerType = (req, res, next) => {
  try {
    const { id } = req.params;
  } catch (error) {
    next(error);
  }
};
const create: ControllerType = async (req, res, next) => {
  try {
    const user: User = req.body as User;
    const newUser = await userModel.create(user);

    res.status(200).send({ "New user": `${newUser.email}` });
  } catch (error) {
    next(error);
  }
};

export { create, getAll, getOne };
