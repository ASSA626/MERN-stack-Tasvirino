import mongoose from "mongoose";

export const ConnectToMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log("MongoDB is connected: " + conn.connection.host)
    } catch (error) {
        console.log("Error for connecting to MongoDB: " + error.message)
        process.exit(1)
    }
}