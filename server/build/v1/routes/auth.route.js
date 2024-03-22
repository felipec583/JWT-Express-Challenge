import express from "express";
import handleLogin from "../controllers/login.controller.js";
import { loginFormValidator } from "../middlewares/auth.handler.js";
const route = express.Router();
route.post("/", loginFormValidator, handleLogin);
export default route;
//# sourceMappingURL=auth.route.js.map