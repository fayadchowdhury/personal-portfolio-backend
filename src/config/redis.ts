import { ENV } from "./env";
import { createClient } from "redis";

const REDIS_CONFIG = {
    REDIS_HOST: ENV.REDIS_HOST,
    REDIS_PORT: ENV.REDIS_PORT,
    REDIS_USERNAME: ENV.REDIS_USERNAME,
    REDIS_PASSWORD: ENV.REDIS_PASSWORD,
}

export const redisClient = createClient({
    username: REDIS_CONFIG.REDIS_USERNAME,
    password: REDIS_CONFIG.REDIS_PASSWORD,
    socket: {
        host: REDIS_CONFIG.REDIS_HOST,
        port: REDIS_CONFIG.REDIS_PORT
    }
});

redisClient.on("err", (error) => console.log(`Error connecting to Redis: ${error}`));