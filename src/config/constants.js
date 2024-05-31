import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.API_PORT || 4000;
export const DB_URI =  process.env.DB_URI
export const API_URL=process.env.API_URL
export const JWT_SECRET = process.env.JWT_SECRET
export const TIME_OUT = process.env.TIME_OUT
export const PROJECT_NAME = process.env.PROJECT_NAME
