import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import roleMiddleware from "../middlewares/role.middleware";
import usersController from "../controllers/users.controller";

const userRouter: Router = Router();

userRouter.get("/", authMiddleware, roleMiddleware, usersController);
userRouter.get("/:id", authMiddleware, usersController);

export default userRouter;
