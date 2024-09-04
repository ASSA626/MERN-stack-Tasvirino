import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'نام و نام خانوادگی الزامی است'],
        unique: true,
    },
    mobile: {
        type: String,
        required: [true, 'شماره موبایل الزامی است'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'رمزعبور الزامی است'],
        minLength: [8, 'رمزعبور حداقل باید 8 کاراکتر باشد'],
        maxLength: [25, 'رمزعبور نباید بیش 25 کاراکتر باشد'],
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

}, { timestamps: true })

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error)
    }
})

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}

const User = mongoose.model("users", userSchema)

export default User