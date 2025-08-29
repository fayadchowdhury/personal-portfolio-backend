import { Router } from "express";
import { sendContactResponseEmail } from "../controllers/mailerController";
import { validateRequestBodyWithZod } from "../middleware/validate";
import { contactSchema } from "../schemas/contactSchema";

const mailerRouter: Router = Router();

mailerRouter.post("/sendContactResponseEmail", validateRequestBodyWithZod(contactSchema), sendContactResponseEmail);

export default mailerRouter;
