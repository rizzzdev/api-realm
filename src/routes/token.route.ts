import { Router } from "express";
import tokenController from "../controllers/token.controller";

const tokenRouter: Router = Router();

tokenRouter.get("/v1/token", tokenController);

export default tokenRouter;
