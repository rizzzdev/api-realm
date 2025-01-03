import "dotenv/config";

const ENV = {
  PORT: process.env.PORT,
  CLIENT_URL: process.env.CLIENT_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  DIRECT_URL: process.env.DIRECT_URL,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY,
  ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY
};

export default ENV;
