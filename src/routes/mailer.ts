import { Router } from "express";
import { sendContactResponseEmail } from "../controllers";
import { validateRequestBodyWithZod } from "../middleware";
import { contactSchema } from "../schemas";

const mailerRouter: Router = Router();

mailerRouter.post("/sendContactResponseEmail", validateRequestBodyWithZod(contactSchema), sendContactResponseEmail);

export default mailerRouter;
