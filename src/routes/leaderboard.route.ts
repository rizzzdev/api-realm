import { Router } from "express";
import { getLeaderboardController } from "../controllers/leaderboard.controller";
import accessMiddleware from "../middlewares/access.middleware";
import authMiddleware from "../middlewares/auth.middleware";

const leaderboardRouter: Router = Router();

leaderboardRouter.get("/", authMiddleware, accessMiddleware, getLeaderboardController);

export { leaderboardRouter };
