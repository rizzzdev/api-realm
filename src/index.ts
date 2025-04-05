import ENV from "./configs/env.config";
import { server } from "./server";
import logger from "./utils/logger.util";

const app = server();
const port: string = ENV.PORT ?? "3000";

app.listen(port, () => {
  logger.info(`Server running in port ${port}`);
});

console.log(new Date());
