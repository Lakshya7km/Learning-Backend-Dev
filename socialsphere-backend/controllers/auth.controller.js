const bcrypt = require('bcrypt');


const User = require('../models/User.model')

const registerUser = async (req, res) => {


    try {

        //extract var from req.body
        const {
            name,
            username,
            email,
            password,
            bio,
            avatar,
            role,
        } = req.body;

        //validate input if any required field is missing return 400 bad req.

        if (!email || !username || !password) {
            res.status(400).json({
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

        //5. create teh user in the data base

        User.create({

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



module.exports = {
    registerUser
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