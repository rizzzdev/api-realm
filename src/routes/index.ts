import { Application, Router } from "express";
import { introRouter } from "./intro.route";
import { getNewAccessTokenRouter } from "./token.route";
import { signInUserRouter, userRouter, signUpUserRouter, signOutUserRouter } from "./user.route";
import { materialRouter } from "./material.route";
import { questionRouter } from "./question.route";
import { quizRouter } from "./quiz.route";
import { testRouter } from "./test.route";
import { activityRouter } from "./activity.route";
import { markRouter } from "./mark.route";
import { leaderboardRouter } from "./leaderboard.route";

const _routes: [string, Router][] = [
  ["/", introRouter],
  ["/signin", signInUserRouter],
  ["/signout", signOutUserRouter],
  ["/signup", signUpUserRouter],
  ["/users", userRouter],
  ["/new-access-token", getNewAccessTokenRouter],
  ["/materials", materialRouter],
  ["/questions", questionRouter],
  ["/quizzes", quizRouter],
  ["/tests", testRouter],
  ["/activities", activityRouter],
  ["/marks", markRouter],
  ["/leaderboard", leaderboardRouter]
];

const routes = (app: Application) => {
  app.use("/", introRouter);
  _routes.forEach((_route) => {
    const [endpoint, router] = _route;
    app.use(`/v1${endpoint}`, router);
  });
};

export default routes;
