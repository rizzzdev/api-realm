import "dotenv/config";

const env: "DEV" | "PROD" = (process.env.ENV as "DEV" | "PROD") || "DEV";

const ENV = {
  PORT: process.env.PORT,
  CLIENT_URL: env === "DEV" ? process.env.CLIENT_URL_DEV : process.env.CLIENT_URL_PROD,
  DATABASE_URL: env === "DEV" ? process.env.DATABASE_URL_DEV : process.env.DATABASE_URL_PROD,
  DIRECT_URL: env === "DEV" ? process.env.DIRECT_URL_DEV : process.env.DIRECT_URL_PROD,
  DATABASE_PASSWORD: env === "DEV" ? process.env.DATABASE_PASSWORD_DEV : process.env.DATABASE_PASSWORD_PROD,
  REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY,
  ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY
};

export default ENV;
