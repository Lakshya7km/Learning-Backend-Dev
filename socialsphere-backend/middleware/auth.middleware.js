const jwt = require('jsonwebtoken');
require('dotenv').config();


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Token required"
        });
    }
    console.log(authHeader)
    const token = authHeader.split(" ")[1];


    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decode)
        req.user = decode;//dynamically created the field user here.can add new properties anytime:
        next();
    } catch (err) {
        console.log(err)
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }


}