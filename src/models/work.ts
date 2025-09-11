import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { sequelize } from "../config";
import { UUID } from "node:crypto";

export interface WorkData {
    id?: UUID,
    iconPath: string,
    title: string,
    subtitle: string,
    period: string,
    description: string,
    items: string[],
}

export class Work extends Model<WorkData> implements WorkData {
    public id?: UUID;
    public iconPath!: string;
    public title!: string;
    public subtitle!: string;
    public period!: string;
    public description!: string;
    public items!: string[];

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Work.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize.literal("gen_random_uuid()")
        },
        iconPath: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        period: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        items: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        }

    },
    {
        sequelize,
        tableName: "works",
        timestamps: true
    }
);