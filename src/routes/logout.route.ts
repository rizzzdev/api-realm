import { Router } from "express";
import logoutController from "../controllers/logout.controller";
import authMiddleware from "../middlewares/auth.middleware";

const logoutRouter: Router = Router();

logoutRouter.patch("", authMiddleware, logoutController);

export default logoutRouter;
