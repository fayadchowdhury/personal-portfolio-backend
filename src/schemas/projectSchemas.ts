import { z } from "zod";

export const projectTopicRequestSchema = z.object(
    {
        topics: z.array(z.string().min(1)).nonempty("At least one topic is required"),
    }
);

export type ProjectTopicRequestSchema = z.infer<typeof projectTopicRequestSchema>;