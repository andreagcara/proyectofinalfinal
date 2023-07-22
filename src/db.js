import mongoose from "mongoose";

export const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL ||"mongodb+srv://andreagcara:gaga@cluster0.acinnzb.mongodb.net/");
        console.log(">>> DB is conected");
    } catch (error) {
        console.log(error);
    }
};
