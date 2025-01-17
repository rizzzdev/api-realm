import { Router } from "express";
import {
  getQuestionByIdController,
  getQuestionsController,
  postQuestionController
} from "../controllers/question.controller";
import accessMiddleware from "../middlewares/access.middleware";
import authMiddleware from "../middlewares/auth.middleware";
import roleMiddleware from "../middlewares/role.middleware";

const questionRouter: Router = Router();
questionRouter.get("/", authMiddleware, accessMiddleware, getQuestionsController);
questionRouter.get("/:id", authMiddleware, accessMiddleware, getQuestionByIdController);
questionRouter.post("/", authMiddleware, accessMiddleware, roleMiddleware, postQuestionController);

export { questionRouter };
