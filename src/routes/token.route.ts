import { Router } from "express";
import tokenController from "../controllers/token.controller";
import authMiddleware from "../middlewares/auth.middleware";

const tokenRouter: Router = Router();

tokenRouter.get("/v1/token", authMiddleware, tokenController);

export default tokenRouter;
