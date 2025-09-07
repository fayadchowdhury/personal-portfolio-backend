import express, { Application, Request, Response } from 'express';
import { APP_CONFIG } from './config';
import routes from './routes';
import cors from 'cors';

import { createGithubSyncJob } from "./jobs";

const app: Application = express();
const port: number = APP_CONFIG.port;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, async () => {
    const githubSyncJob = createGithubSyncJob();
    githubSyncJob.start();
    console.log(`Server is running on port: ${port}`);
});