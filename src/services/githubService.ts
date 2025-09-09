import { GITHUB_SERVICE_CONFIG } from "../config";
import { Octokit } from "octokit";
import { ProjectBase, ProjectMetadata } from "../models";

const octokit = new Octokit(
    {
        auth: GITHUB_SERVICE_CONFIG.GITHUB_ACCESS_TOKEN
    }
);

export async function pullGithubPublicRepositories() : Promise<ProjectBase[]> {
    const username: string = GITHUB_SERVICE_CONFIG.GITHUB_USERNAME;
    const repoLists: ProjectBase[] = [];
    try {
        const res = await octokit.request(
            "GET /users/{username}/repos",
            {
                username: username,
                per_page: 100,
            }
        );
        if ( res.status == 200 ){
            res.data.forEach(async (repo: any) => {
                repoLists.push(
                    {
                        "id": repo.id,
                        "owner": repo.owner.login,
                        "repo": repo.name,
                        "description": repo.description
                    }
                );
            });
        }
        return repoLists;
    }
    catch (err: unknown) {
        console.log(`Error: Github Service: ${err}`);
        throw err;
    }
};

export async function pullGithubPublicRepositoriesMetadata() : Promise<ProjectMetadata[]> {
    const repoMetadataList: ProjectMetadata[] = [];
    try {
        const repoList = await pullGithubPublicRepositories();
        for (const repo of repoList) {
            let topicsList: string[] = [];
            let languagesList: string[] = [];
            let readmeString: string = "";
            let imageUrlString: string = "";
            const topics = await octokit.request('GET /repos/{owner}/{repo}/topics', {
                owner: repo.owner,
                repo: repo.repo,
            });
            const languages = await octokit.request('GET /repos/{owner}/{repo}/languages', {
                owner: repo.owner,
                repo: repo.repo,
            });
            const readme = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
                owner: repo.owner,
                repo: repo.repo,
                path: 'README.md',
            }).catch(()=> null);
            const imageUrl = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
                owner: repo.owner,
                repo: repo.repo,
                path: 'assets/featured-image.png',
            }).catch(()=> null);
            if (topics.status == 200) {
                if ( !topics.data.names || topics.data.names.length == 0 ) {
                    topicsList = [];
                }
                topicsList = topics.data.names;
            }
            if (languages.status == 200) {
                if ( !languages.data || Object.keys(languages.data).length == 0 ) {
                    languagesList = [];
                }
                languagesList = Object.keys(languages.data);
            }
            if (readme && readme.status == 200) {
                if ( !readme.data || !readme.data.content ) {
                    readmeString = ""; 
                }
                readmeString = Buffer.from(readme.data.content, "base64").toString();
            }
            if (imageUrl && imageUrl.status == 200) {
                if ( !imageUrl.data ) {
                    imageUrlString = ""
                }
                imageUrlString = imageUrl.data.download_url;
            }
            const repoMetadata = {
                ...repo,
                languages: languagesList,
                topics: topicsList,
                readme: readmeString,
                imageUrl: imageUrlString,
            }
            repoMetadataList.push(repoMetadata);
        }
        return repoMetadataList;
    }
    catch (err: unknown) {
        console.log(`Error: Github Metadata Service: ${err}`);
        throw err;
    }
};