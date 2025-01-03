import express, { Application } from "express";
import routes from "./routes";
import ENV from "./configs/env.config";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "./utils/logger.util";

const app: Application = express();
const port: string = ENV.PORT ?? "3000";

app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ENV.CLIENT_URL
  })
);
routes(app);

app.listen(port, () => {
  logger.info(`Server running in port ${port}`);
});
