import { ControllerType } from "../types/types";
import { checkCredentials } from "../models/user.model.js";
import { SECRET_KEY } from "../config/keys.js";
import jwt from "jsonwebtoken";


const handleLogin: ControllerType = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await checkCredentials({ email, password });

    const accessToken = jwt.sign({ email }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).send({ token: accessToken });
  } catch (error) {
    next(error);
  }
};

export default handleLogin;
