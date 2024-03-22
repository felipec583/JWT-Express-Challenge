import { ControllerType, User } from "../types/types";
import { checkCredentials, getOneBy } from "../models/user.model.js";
import { SECRET_KEY } from "../config/keys.js";
import jwt from "jsonwebtoken";
const handleLogin: ControllerType = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await checkCredentials({ email, password });
   

    const accessToken = jwt.sign({ email }, SECRET_KEY, {
      expiresIn: "30min",
    });
    res.status(200).send({ accessToken });
  } catch (error) {
    next(error);
  }
};

export default handleLogin;
