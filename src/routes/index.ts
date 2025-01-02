import { Application, Router } from "express";
import introRouter from "./intro.route";
import loginRouter from "./login.route";
import registerRouter from "./register.route";
import tokenRouter from "./token.route";
import logoutRouter from "./logout.route";

const _routes: Router[] = [introRouter, loginRouter, registerRouter, tokenRouter, logoutRouter];

const routes = (app: Application) => {
  _routes.forEach((route) => {
    app.use(route);
  });
};

export default routes;
