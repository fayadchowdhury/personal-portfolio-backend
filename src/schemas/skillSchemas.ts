import { z } from "zod";

export const skillTypeRequestSchema = z.object(
    {
        type: z.string().min(1),
    }
);

export type SkillAreaRequestSchema = z.infer<typeof skillTypeRequestSchema>;