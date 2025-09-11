import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config";
import { UUID } from "node:crypto";

export interface SkillData {
    id?: UUID,
    name: string,
    iconPath: string,
    type: string,
    subType: string,
}

export class Skill extends Model<SkillData> implements SkillData {
    public id?: UUID;
    public name!: string;
    public iconPath!: string;
    public type!: string;
    public subType!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Skill.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize.literal("gen_random_uuid()")
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        iconPath: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        subType: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        tableName: "skills",
        timestamps: true
    }
);