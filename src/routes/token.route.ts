import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { getNewAccessTokenController } from "../controllers/token.controller";

const getNewAccessTokenRouter: Router = Router();
getNewAccessTokenRouter.get("/", authMiddleware, getNewAccessTokenController);

export { getNewAccessTokenRouter };
