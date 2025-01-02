import { Application, Router } from "express";
import introRouter from "./intro.route";
import loginRouter from "./login.route";
import registerRouter from "./register.route";

const _routes: Router[] = [introRouter, loginRouter, registerRouter];

const routes = (app: Application) => {
  _routes.forEach((route) => {
    app.use(route);
  });
};

export default routes;
