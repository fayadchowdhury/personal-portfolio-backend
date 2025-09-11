import { Router } from "express";
import { getSocialsData } from "../controllers";

const socialsRouter: Router = Router();

socialsRouter.get("/getData", getSocialsData);

export default socialsRouter;