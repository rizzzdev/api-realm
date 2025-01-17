import express, { Application } from "express";
import routes from "./routes";
import ENV from "./configs/env.config";
import cookieParser from "cookie-parser";
import logger from "./utils/logger.util";
import cors from "cors";
import qs from "qs";

const app: Application = express();
const port: string = ENV.PORT ?? "3000";

app.set("trust proxy", true);
app.set("query parser", (str: string) => qs.parse(str));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: [ENV!.CLIENT_URL!, "http://localhost:3000"],
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
    // preflightContinue: true
  })
);
app.use(cookieParser());
routes(app);

app.listen(port, () => {
  logger.info(`Server running in port ${port}`);
});
