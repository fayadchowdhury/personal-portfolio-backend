import express, { Application, Request, Response } from 'express';
import { APP_CONFIG } from './config';
import routes from './routes';
import cors from 'cors';

import { createGithubSyncJob } from "./jobs";

import { sequelize } from './config';
import { redisClient } from './config';

const app: Application = express();
const port: number = APP_CONFIG.port;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, async () => {
    try {
        await sequelize.authenticate();
        console.log(`Connected to database!`);
        await sequelize.sync();
        console.log(`Synced tables`);
        await redisClient.connect();
        console.log(`Connected to Redis!`);
        const githubSyncJob = createGithubSyncJob();
        githubSyncJob.start();
    }
    catch (err: unknown) {
        console.log(`Error: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});