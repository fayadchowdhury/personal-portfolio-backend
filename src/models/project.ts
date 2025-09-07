export interface ProjectBase {
    owner: string;
    repo: string;
    description: string;
}

export interface ProjectMetadata {
    owner: string;
    repo: string;
    description: string;
    languages: string[];
    topics: string[];
    readme: string;
}