const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config()
const User = require('../models/User.model')

const registerUser = async (req, res) => {


    try {

        //1.extract var from req.body
        const {
            name,
            username,
            email,
            password,
            bio,
            avatar,
            role,
        } = req.body;

        //2.validate input if any required field is missing return 400 bad req.

        if (!email || !username || !password) {
            return res.status(400).json({
                message: "required field are missing"
            })
        }


        //3. check if user already exist
        const checkEmail = await User.findOne({
            email: email,
        })
        if (checkEmail) {
            res.status(400).json({
                message: "Email Already Registered Please Login"
            })
        }

        const checkUsername = await User.findOne({
            username: username,
        })
        if (checkUsername) {
            res.status(400).json({
                message: "Username already exist try different username or login"
            })
        }
        //4.hash the password

        const hashedPassword = await bcrypt.hash(password, 10)

        //5. create the user in the data base

        const user = await User.create({

            name,
            username,
            email,
            password: hashedPassword,
            bio,
            role,
            avatar,
        })

        res.status(201).json({
            success: true,
            messsage: "User Registeration Successfully"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}



const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        //check the input first

        if (!email || !password) {
            return res.status(400).json({
                message: "required field are missing"
            })
        }

        //validate the input
        const user = await User.findOne({
            email: email,
        })
        if (!user) {
            return res.status(404).json({
                message: "Invalid Credential"
            })
        }
        console.log(user)
        //compare the password

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Unauthorized access"
            })
        }


        //sign jwt token for the logged in user

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            }, process.env.JWT_SECRET,
            {
                expiresIn: '1hr'
            }
        )
        res.status(200).json({
            message: `welcome ${user.username}`,
            token: token
        })


       

    } catch (err) {
        console.log(err)

    }
}
module.exports = {
    registerUser,
    loginUser
}

// const findOneUser = async (email, username) => {
//     const foundStatus = await User.findOne({
//         $or: [
//             { email: email },//condition 1
//             { username: username }//condition 2
//         ]
//     })


//     return foundStatus;

// }