import { Router } from "express";
import { getTaglinesData } from "../controllers";

const taglinesRouter: Router = Router();

taglinesRouter.get("/getData", getTaglinesData);

export default taglinesRouter;