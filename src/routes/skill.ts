import { Router } from "express";
import { getAllSkills } from "../controllers";

const skillRouter: Router = Router();

skillRouter.get("/getAll", getAllSkills);

export default skillRouter;