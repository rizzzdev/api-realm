import { Application, Router } from "express";
import introRouter from "./intro.route";
import loginRouter from "./login.route";
import registerRouter from "./register.route";
import tokenRouter from "./token.route";
import logoutRouter from "./logout.route";
import userRouter from "./user.route";
import materialRouter from "./material.route";

const _routes: [string, Router][] = [
  ["/", introRouter],
  ["/login", loginRouter],
  ["/register", registerRouter],
  ["/token", tokenRouter],
  ["/logout", logoutRouter],
  ["/users", userRouter],
  ["/materials", materialRouter]
];

const routes = (app: Application) => {
  app.use("/", introRouter);
  _routes.forEach((_route) => {
    const [endpoint, router] = _route;
    app.use(`/v1${endpoint}`, router);
  });
};

export default routes;
