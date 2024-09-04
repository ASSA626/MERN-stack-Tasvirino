import jwt from "jsonwebtoken";
import User from '../models/user.model.js'

export const authenticate = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken

        if (!accessToken) {
            return res.status(401).json({ message: "Unauthorized - No access token provided" })
        }

        try {
            const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
            const user = await User.findById(decoded.userId).select("-password")

            if (!user) {
                return res.status(401).json({ message: "User not found" })
            }

            req.user = user
            next()
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                return res.status(401).json({ message: "Unauthorized - Access token expired" })
            }
            throw error
        }
    } catch (error) {
        console.log("Error in authenticate method on auth middleware: ", error.message)
        res.status(500).json({ message: error.message })
    }
}