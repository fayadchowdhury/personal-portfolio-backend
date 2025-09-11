import { Router } from "express";
import { getIntroData } from "../controllers";

const introRouter: Router = Router();

introRouter.get("/getData", getIntroData);

export default introRouter;