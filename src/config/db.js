import mongoose from "mongoose";
import { DB_URI } from "./constants.js";



export const DB_CONNECT = async () => {

    try {
        await mongoose.connect(DB_URI)

        console.log("Connected to DB")
        
    } catch (error) {

        throw new Error("ERROR: ", error)
        
    }
}