import { ControllerType } from "../types/types";

const ignoreFavicon: ControllerType = (req, res, next) => {
  if (req.originalUrl.includes("favicon.ico")) {
    res.sendStatus(204);
  } else {
    next();
  }
};

export default ignoreFavicon;
