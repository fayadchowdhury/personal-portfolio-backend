import dotenv from "dotenv";

const env: string = process.env.NODE_ENV || "dev";
const envFile: string = process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.prod";
dotenv.config({ path: envFile });

export const ENV = {
    NODE_ENV: env,
    PORT: process.env.PORT || 3000,
};