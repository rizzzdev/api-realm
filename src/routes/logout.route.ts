import { Router } from "express";
import logoutController from "../controllers/logout.controller";

const logoutRouter: Router = Router();

logoutRouter.delete("/v1/logout", logoutController);

export default logoutRouter;
