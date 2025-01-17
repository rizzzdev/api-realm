import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import roleMiddleware from "../middlewares/role.middleware";
import accessMiddleware from "../middlewares/access.middleware";
import { getActivitiesController, postActivityController } from "../controllers/activity.controller";

const activityRouter: Router = Router();

activityRouter.get("/", authMiddleware, accessMiddleware, getActivitiesController);
activityRouter.post("/", authMiddleware, accessMiddleware, roleMiddleware, postActivityController);

export { activityRouter };
