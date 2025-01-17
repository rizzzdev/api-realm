import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import roleMiddleware from "../middlewares/role.middleware";
import {
  getUsersController,
  getUserByIdController,
  signInUserController,
  signUpUserController,
  signOutUserController,
  getUserMarksByIdController
} from "../controllers/users.controller";
import accessMiddleware from "../middlewares/access.middleware";

const signInUserRouter: Router = Router();
signInUserRouter.post("/", signInUserController);

const signOutUserRouter: Router = Router();
signOutUserRouter.patch("/", authMiddleware, signOutUserController);

const signUpUserRouter: Router = Router();
signUpUserRouter.post("/", signUpUserController);

const userRouter: Router = Router();
userRouter.get("/", authMiddleware, accessMiddleware, roleMiddleware, getUsersController);
userRouter.get("/:id", authMiddleware, accessMiddleware, getUserByIdController);
userRouter.get("/:id/marks", authMiddleware, accessMiddleware, getUserMarksByIdController);

export { signInUserRouter, signOutUserRouter, signUpUserRouter, userRouter };
