import cron, { ScheduledTask } from "node-cron";
import { pullGithubPublicRepositoriesMetadata } from "../services";


export function createGithubSyncJob() : ScheduledTask {
    return cron.schedule("* * * * *", async () => {
        console.log("Running GitHub sync job...");
        try {
            const repos = await pullGithubPublicRepositoriesMetadata();
            console.log(repos);
            console.log("GitHub sync completed.");
        } catch (err) {
            console.error("GitHub sync failed:", err);
        }
    });
};