import express, { Application } from "express";
import routes from "../routes";
import ENV from "../configs/env.config";
import cookieParser from "cookie-parser";
import cors from "cors";
import qs from "qs";

export const server = () => {
  const app: Application = express();

  app.set("trust proxy", true);
  app.set("query parser", (str: string) => qs.parse(str));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(
    cors({
      credentials: true,
      origin: [ENV.CLIENT_URL!, "http://localhost:3000"],
      methods: ["GET", "POST", "PATCH"],
      allowedHeaders: ["Content-Type", "Authorization"]
    })
  );
  app.use(cookieParser());
  routes(app);

  return app;
};
