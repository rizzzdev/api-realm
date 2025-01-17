import express, { Application } from "express";
import routes from "./routes";
import ENV from "./configs/env.config";
import cookieParser from "cookie-parser";
import logger from "./utils/logger.util";
import qs from "qs";

const app: Application = express();
const port: string = ENV.PORT ?? "3000";

app.set("trust proxy", true);
app.set("query parser", (str: string) => qs.parse(str));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(
//   cors({
//     credentials: true,
//     origin: ENV.CLIENT_URL,
//     methods: ["GET", "POST", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"]
//   })
// );
routes(app);
app.use("/v1/coba", (req, res) => {
  res.send(req.headers.authorization);
});

app.listen(port, () => {
  logger.info(`Server running in port ${port}`);
});
