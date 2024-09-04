import express from "express";
import { createRoom, deleteRoom, getAllRooms, getAllUserRooms } from "../controllers/room.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { adminRoute } from "../middlewares/admin.middleware.js";

const router = express.Router()

router.get("/", authenticate, getAllUserRooms)

router.get("/admin-rooms", authenticate, adminRoute, getAllRooms)

router.post("/create-room", authenticate, createRoom)

router.delete("/delete-room/:id", authenticate, deleteRoom)

export default router