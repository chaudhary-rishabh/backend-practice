import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
    console.log("hello world")
    try {
        const DB_OPTIONS = {
            dbname: process.env.DATABASE
        } 
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("connected to db")
    } catch (e) {
        console.log("error occured while connecting"+e.message);
    }
}

export default connectDB;