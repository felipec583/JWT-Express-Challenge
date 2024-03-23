import express from "express";
import cors from "cors";
import "dotenv/config";
import userRoutes from "./routes/user.route.js";
import errorHandler from "./middlewares/error.handler.js";
import ignoreFavicon from "./middlewares/favicon.handler.js";
import authRoute from "./routes/auth.route.js";
import { createNewError } from "./helpers/error.js";
import { logger } from "logger-express";
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use(logger());
app.use(ignoreFavicon);
app.use("/usuarios", userRoutes);
app.use("/login", authRoute);
app.use("*", () => {
    throw createNewError("", 404, "This page does not exist");
});
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON ${PORT}`);
});
//# sourceMappingURL=server.js.map