import { z } from "zod";

export const contactSchema = z.object(
    {
        name: z.string().min(2, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
        email: z.email({ message: "Invalid email address" }),
        message: z.string().min(5, { message: "Message must be at least 5 characters long" }).max(1000, { message: "Message must be less than 1000 characters" })
    }
)

export type ContactSchema = z.infer<typeof contactSchema>;