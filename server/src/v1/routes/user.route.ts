import express from "express";
import * as userController from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/jwt.handler.js";
import { registrationFormValidator } from "../middlewares/auth.handler.js";
const route = express.Router();

route.get("/", verifyJWT, userController.getAll);
route.get("/:id", userController.getOne);
route.post("/", registrationFormValidator, userController.create);

export default route;
