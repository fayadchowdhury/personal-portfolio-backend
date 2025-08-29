import express, { Application, Request, Response } from 'express';
import { APP_CONFIG } from './config';
import routes from './routes';

const app: Application = express();
const port: number = APP_CONFIG.port;

app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});