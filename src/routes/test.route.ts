import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import roleMiddleware from "../middlewares/role.middleware";
import accessMiddleware from "../middlewares/access.middleware";
import { getTestsController, postTestController } from "../controllers/test.controller";

const testRouter: Router = Router();
testRouter.get("/", authMiddleware, accessMiddleware, getTestsController);
testRouter.post("/", authMiddleware, accessMiddleware, roleMiddleware, postTestController);

export { testRouter };
