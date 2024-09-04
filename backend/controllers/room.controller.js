import Room from "../models/room.model.js"

export const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find({})
        res.json({ rooms })
    } catch (error) {
        console.log("Error in getAllRooms method on room controller: ", error.message)
        res.status(500).json({ message: error.message })
    }
}

export const getAllUserRooms = async (req, res) => {
    try {
        const user = req.user
        const rooms = await Room.find({ owner: user })
        res.json({ rooms })
    } catch (error) {
        console.log("Error in getAllUserRooms method on room controller: ", error.message)
        res.status(500).json({ message: error.message })
    }
}

export const createRoom = async (req, res) => {
    const owner = req.user

    try {
        const { title, link } = req.body
        const roomTitleExits = await Room.findOne({ title })
        const roomLinkExits = await Room.findOne({ link })

        if (roomTitleExits) {
            return res.status(400).json({ message: "اتاقی با این عنوان وجود دارد" })
        }
        if (roomLinkExits) {
            return res.status(400).json({ message: "اتاقی با این لینک وجود دارد" })
        }

        const newRoom = await Room.create({
            owner: owner,
            title,
            link
        })

        res.status(201).json({ newRoom })
    } catch (error) {
        console.log("Error in getAllUserRooms method on room controller: ", error.message)
        res.status(500).json({ message: error.message })
    }
}

export const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id)
        if (!room) {
            return res.status(404).json({ message: "Room nor found" })
        }

        await Room.findByIdAndDelete(req.params.id)
        return res.json({ message: "حذف با موفقیت انجام شد" })
    } catch (error) {
        console.log("Error in deleteRoom method on room controller: ", error.message)
        res.status(500).json({ message: error.message })
    }
}