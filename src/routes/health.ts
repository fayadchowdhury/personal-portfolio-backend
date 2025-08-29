import { Router } from "express";
import { healthCheck } from "../controllers";

const healthRouter: Router = Router();

healthRouter.get("/", healthCheck);

export default healthRouter;