import { Router } from "express";
import registerController from "../controllers/register.controller";

const registerRouter: Router = Router();

registerRouter.post("/", registerController);

export default registerRouter;
