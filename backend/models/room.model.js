import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    title: {
        type: String,
        required: [true, "عنوان گفتگو الزامی است"],
        unique: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    participles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: false,
            default: []
        }
    ]
}, { timestamps: true })

const Room = mongoose.model("rooms", roomSchema)

export default Room