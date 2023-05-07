import { config } from "dotenv";
config();

console.log(process.env.PORT);

export default {
  port: process.env.PORT || 3000,
};

export const DB_HOST = process.env.DB_HOST || "198.38.83.33";
export const DB_USER = process.env.DB_USER || "javierd2_ea_006";
export const DB_PASSWORD = process.env.DB_PASSWORD || "sasasa0";
export const DB_NAME = process.env.DB_NAME || "javierd2_ea_006";
