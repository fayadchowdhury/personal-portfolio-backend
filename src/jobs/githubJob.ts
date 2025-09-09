import cron, { ScheduledTask } from "node-cron";
import { pullGithubPublicRepositoriesMetadata } from "../services";
import { Project } from "../models";


export function createGithubSyncJob() : ScheduledTask {
    return cron.schedule("0 */6 * * *", async () => {
        console.log("Running GitHub sync job...");
        try {
            const repos = await pullGithubPublicRepositoriesMetadata();
            console.log("GitHub sync completed.");
            console.log("Pushing to database");
            const projects = await Project.bulkCreate(repos, {
                updateOnDuplicate: ["owner", "repo", "description", "languages", "topics", "readme", "imageUrl", "projectCreatedAt", "projectUpdatedAt"],
                returning: true
            });
            if (projects) {
                console.log("Successfully pushed to database");
            }
        } catch (err) {
            console.error("GitHub sync failed:", err);
        }
    });
};