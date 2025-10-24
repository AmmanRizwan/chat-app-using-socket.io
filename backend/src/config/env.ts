import dotenv from "dotenv"

dotenv.config()

const { 
  PORT,
  ALLOWED_ORIGIN,
  METHOD,
  NODE_ENV
} = process.env;

if (!PORT) {
  throw new Error("PORT is not set");
}

if (!ALLOWED_ORIGIN) {
  throw new Error("ALLOWED_ORIGIN is not set");
}

if (!METHOD) {
  throw new Error("METHOD is not set");
}

if (!NODE_ENV) {
  throw new Error("NODE_ENV is not set");
}

const config = {
  PORT: PORT,
  ORIGIN: ALLOWED_ORIGIN,
  METHOD: METHOD,
  ENV: NODE_ENV
}

export default config;