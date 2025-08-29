import { Router } from "express";
import { sendMail } from "../controllers/mailerController";

const mailerRouter: Router = Router();

mailerRouter.post("/send", sendMail);

export default mailerRouter;
