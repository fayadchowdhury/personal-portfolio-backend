import { ENV } from "./env";
import { Sequelize } from "sequelize"; 

const DB_CONFIG = {
    DB_HOST: ENV.DB_HOST,
    DB_PORT: ENV.DB_PORT,
    DB_DATABASE: ENV.DB_DATABASE,
    DB_USER: ENV.DB_USER,
    DB_PASSWORD: ENV.DB_PASSWORD
};

export const sequelize = new Sequelize(
    DB_CONFIG.DB_DATABASE,
    DB_CONFIG.DB_USER,
    DB_CONFIG.DB_PASSWORD,
    {
        host: DB_CONFIG.DB_HOST,
        port: DB_CONFIG.DB_PORT,
        dialect: "postgres"
    }
);