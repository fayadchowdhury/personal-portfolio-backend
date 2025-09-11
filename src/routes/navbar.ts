import { Router } from "express";
import { getNavbarData } from "../controllers";

const navbarRouter: Router = Router();

navbarRouter.get("/getData", getNavbarData);

export default navbarRouter;