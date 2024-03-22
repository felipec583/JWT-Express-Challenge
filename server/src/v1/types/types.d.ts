import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";
type Roles =
  | "Full Stack Developer"
  | "Frontend Developer"
  | "Backend Developer";

type Languages = "Javascript" | "Python | Ruby";

interface User {
  id?: number;
  email: string;
  password: string;
  rol: Roles;
  lenguaje: Languages;
}

type LoginCredentialsI = Pick<User, "email" | "password">;

interface Credentials {
  [key: string]: string;
}

type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | any;

type ErrorHandlerT = (
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => Response<any, Record<string, any>> | undefined;

interface CustomReq extends Request {
  email: string | JwtPayload;
}

interface ErrorContI {
  message: string;
  statusCode: number;
}

interface CustomError {
  message: string;
  statusCode: number;
  readonly code?: string | undefined;
  checkCode(code: string);
}

type customJwtPayload = JwtPayload & { email: string };

interface DecodedPayLoad {
  email: string;
}

export {
  User,
  ControllerType,
  ErrorHandlerT,
  LoginCredentialsI,
  Credentials,
  CustomReq,
  DecodedPayLoad,
  customJwtPayload,
  ErrorContI,
  CustomError
};
