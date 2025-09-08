import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config";

export interface ProjectBase {
    id: number,
    owner: string,
    repo: string,
    description: string,
}

export interface ProjectMetadata {
    id?: number,
    owner: string,
    repo: string,
    description: string,
    languages: string[],
    topics: string[],
    readme: string,
}

export class Project extends Model<ProjectMetadata> implements ProjectMetadata {
    public id?: number;
    public owner!: string;
    public repo!: string;
    public description!: string;
    public languages!: string[];
    public topics!: string[];
    public readme!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Project.init(
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        repo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        languages: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
            defaultValue: []
        },
        topics: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
            defaultValue: []
        },
        readme: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        sequelize,
        tableName: "projects",
        timestamps: true
    }
);