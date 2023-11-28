import mongoose from "mongoose";

const connectDB = async() => {
    const DB = process.env.DB_LINK;
    try{
        await mongoose.connect(DB);
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log(err.message);
    }
}

export default connectDB