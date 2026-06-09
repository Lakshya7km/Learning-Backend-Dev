const jwt = require('jsonwebtoken')
require("dotenv").config()

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;//Authorization: Bearer abc.xyz.123


    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Token required"
        });
    }

    console.log(authHeader)
    const token = authHeader.split(" ")[1];//["Bearer", "abc.xyz.123"]
    console.log(token)

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        )


        req.user = decoded;
        next();
    }
    catch (err) {

        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });

    }
}   


module.exports = authMiddleware