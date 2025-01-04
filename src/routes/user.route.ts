import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import roleMiddleware from "../middlewares/role.middleware";
import { getUsersController, getUserByIdController } from "../controllers/users.controller";
import accessMiddleware from "../middlewares/access.middleware";

const userRouter: Router = Router();

userRouter.get("/", authMiddleware, roleMiddleware, accessMiddleware, getUsersController);
userRouter.get("/:id", authMiddleware, accessMiddleware, getUserByIdController);

export default userRouter;
