import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import roleMiddleware from "../middlewares/role.middleware";
import { getMaterialsController, getMaterialByIdController } from "../controllers/material.controller";
import accessMiddleware from "../middlewares/access.middleware";

const materialRouter: Router = Router();

materialRouter.get("/", authMiddleware, accessMiddleware, getMaterialsController);
materialRouter.get("/:id", authMiddleware, accessMiddleware, getMaterialByIdController);
materialRouter.post("/", authMiddleware, accessMiddleware, roleMiddleware, getMaterialsController);

export default materialRouter;
