import { Router } from "express";
import loginCountroler from "../controllers/login.controller";

const loginRouter: Router = Router();

loginRouter.post("/v1/login", loginCountroler);

export default loginRouter;
