import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config";
import { UUID } from "node:crypto";

export interface TestimonialData {
    id?: UUID,
    title: string,
    message: string,
    name: string,
    designation: string,
    imagePath: string,
    rating: number,
}

export class Testimonial extends Model<TestimonialData> implements TestimonialData {
    public id?: UUID;
    public title!: string;
    public message!: string;
    public name!: string;
    public designation!: string;
    public imagePath!: string;
    public rating!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Testimonial.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: sequelize.literal("gen_random_uuid()")
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        message: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        imagePath: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        sequelize,
        tableName: "testimonials",
        timestamps: true
    }
);