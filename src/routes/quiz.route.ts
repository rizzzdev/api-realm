import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import roleMiddleware from "../middlewares/role.middleware";
import accessMiddleware from "../middlewares/access.middleware";
import { getQuizByIdController, getQuizzesController, postQuizController } from "../controllers/quiz.controller";

const quizRouter: Router = Router();
quizRouter.get("/", authMiddleware, accessMiddleware, getQuizzesController);
quizRouter.get("/:id", authMiddleware, accessMiddleware, getQuizByIdController);
quizRouter.post("/", authMiddleware, accessMiddleware, roleMiddleware, postQuizController);

export { quizRouter };
