import { ControllerType, CustomReq } from "../types/types";
import { Request, Response } from "express";
import { SECRET_KEY } from "../config/keys.js";
import { ServerResponse } from "http";

import jwt from "jsonwebtoken";
import { createNewError } from "../helpers/error.js";

const verifyJWT: ControllerType = async (req, res, next) => {
  try {
    const result = verifyAutheader(req, res);
    if (result instanceof ServerResponse) {
      return result;
    }
    const { authHeader } = result as { authHeader: string };
    const token = authHeader.split(" ")[1];
    if (!token) throw createNewError("", 401, "There is no token");
    
    const decodedToken = jwt.verify(token, SECRET_KEY);
    (req as CustomReq).email = (decodedToken as any).email;
    next();
  } catch (error: any) {
    console.log(error.message);
    next(error);
  }
};

const verifyAutheader = (
  req: Request,
  res: Response
): Response | { authHeader: string } => {
  const authHeader =
    req.headers.authorization || (req.headers?.Authorization as string);
  if (!authHeader) {
    throw createNewError("auth_2");
  } else {
    return { authHeader };
  }
};

export { verifyJWT };
