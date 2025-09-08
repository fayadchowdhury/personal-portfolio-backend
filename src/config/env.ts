import dotenv from "dotenv";

const env: string = process.env.NODE_ENV || "dev";
const envFile: string = process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.prod";
dotenv.config({ path: envFile });

export const ENV = {
    NODE_ENV: env,
    PORT: process.env.PORT || 3000,
    MAILER_SERVICE: process.env.MAILER_SERVICE || "gmail",
    MAILER_USER: process.env.MAILER_USER || "dev",
    MAILER_EMAIL: process.env.MAILER_EMAIL || "user@example.com",
    MAILER_PASSWORD: process.env.MAILER_PASSWORD || "password",
    GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN || "token",
    GITHUB_USERNAME: process.env.GITHUB_USERNAME || "username",
    DB_HOST: process.env.DB_HOST || "host.xyz",
    DB_PORT: process.env.DB_PORT || 1234,
    DB_DATABASE: process.env.DB_DATABASE || "database",
    DB_USER: process.env.DB_USER || "user",
    DB_PASSWORD: process.env.DB_PASSWORD || "password"
};