import { Router } from "express";
import { getAllWorks } from "../controllers";

const workRouter: Router = Router();

workRouter.get("/getAll", getAllWorks);

export default workRouter;