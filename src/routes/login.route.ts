import { Router } from "express";
import loginCountroler from "../controllers/login.controller";

const loginRouter: Router = Router();

loginRouter.post("/", loginCountroler);

export default loginRouter;
