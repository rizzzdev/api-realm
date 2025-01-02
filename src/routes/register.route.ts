import { Router } from "express";
import registerController from "../controllers/register.controller";

const registerRouter: Router = Router();

registerRouter.post("/v1/register", registerController);

export default registerRouter;
