import { Router } from "express";
import { getNameData } from "../controllers";

const nameRouter: Router = Router();

nameRouter.get("/getData", getNameData);

export default nameRouter;