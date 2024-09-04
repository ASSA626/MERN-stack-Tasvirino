import express from "express";
import dotenv from "dotenv";
import { ConnectToMongo } from "./config/connectToMongo.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import roomRoutes from "./routes/room.routes.js"

dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cookieParser())

// * Express routes
app.use("/api/auth", authRoutes)
app.use("/api/rooms", roomRoutes)

app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`)
    ConnectToMongo()
})