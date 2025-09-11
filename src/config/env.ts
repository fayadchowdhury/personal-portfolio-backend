import dotenv from "dotenv";

const env: string = process.env.NODE_ENV || "dev";
const envFile: string = process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.prod";
dotenv.config({ path: envFile });

export const ENV = {
    NODE_ENV: env,
    PORT: Number(process.env.PORT || 3000),
    MAILER_SERVICE: String(process.env.MAILER_SERVICE || "gmail"),
    MAILER_USER: String(process.env.MAILER_USER || "dev"),
    MAILER_EMAIL: String(process.env.MAILER_EMAIL || "user@example.com"),
    MAILER_PASSWORD: String(process.env.MAILER_PASSWORD || "password"),
    GITHUB_ACCESS_TOKEN: String(process.env.GITHUB_ACCESS_TOKEN || "token"),
    GITHUB_USERNAME: String(process.env.GITHUB_USERNAME || "username"),
    DB_HOST: String(process.env.DB_HOST || "host.xyz"),
    DB_PORT: Number(process.env.DB_PORT || 1234),
    DB_DATABASE: String(process.env.DB_DATABASE || "database"),
    DB_USER: String(process.env.DB_USER || "user"),
    DB_PASSWORD: String(process.env.DB_PASSWORD || "password"),
    REDIS_HOST: String(process.env.REDIS_HOST || "host.xyz"),
    REDIS_PORT: Number(process.env.REDIS_PORT || 1234),
    REDIS_USERNAME: String(process.env.REDIS_USERNAME || "user"),
    REDIS_PASSWORD: String(process.env.REDIS_PASSWORD || "password"),
};