import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import accessMiddleware from "../middlewares/access.middleware";
import { getMarksController, postMarkController } from "../controllers/mark.controller";

const markRouter: Router = Router();

markRouter.get("/", authMiddleware, accessMiddleware, getMarksController);
markRouter.post("/", authMiddleware, accessMiddleware, postMarkController);

export { markRouter };
