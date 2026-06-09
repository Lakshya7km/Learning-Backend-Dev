const fs = require('fs/promises');
const path = require('path');
const bcrypt = require('bcrypt');
require('dotenv').config()
const jwt = require('jsonwebtoken')

const filePath = path.join(__dirname, "../Database/users.json");
const saltRounds = 10;

const getUsersFromFile = async () => {
    const data = await fs.readFile(filePath, "utf-8");
    return data ? JSON.parse(data) : [];
}

const saveUsersToFile = async (users) => {
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
}

const removePassword = (user) => {
    const { password, ...safeUser } = user;
    return safeUser;
}

const getUsersService = async () => {
    try {
        const users = await getUsersFromFile();

        return {
            success: true,
            statusCode: 200,
            message: "Users fetched",
            users: users.map(removePassword)
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
}

const getUserByIdService = async (id) => {
    try {
        const users = await getUsersFromFile();
        const user = users.find(u => u.id === id);

        if (!user) {
            return {
                success: false,
                statusCode: 404,
                message: "User not found"
            };
        }

        return {
            success: true,
            statusCode: 200,
            message: `User fetched by id ${id}`,
            user: removePassword(user)
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
}

const createUserService = async (userData) => {
    const { name, email, password, profession } = userData;

    if (!name || !email || !password || !profession) {
        return {
            success: false,
            statusCode: 400,
            message: "All fields are required"
        };
    }

    try {
        const users = await getUsersFromFile();
        const existingUser = users.find(u => u.email === email);

        if (existingUser) {
            return {
                success: false,
                statusCode: 409,
                message: "Email already exists"
            };
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const user = {
            id: users.length + 1,
            name,
            email,
            password: hashedPassword,
            profession
        };

        users.push(user);
        await saveUsersToFile(users);

        return {
            success: true,
            statusCode: 201,
            message: "User created",
            user: removePassword(user)
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
}

const loginUserService = async (loginData) => {
    const { email, password } = loginData;

    if (!email || !password) {
        return {
            success: false,
            statusCode: 400,
            message: "email and password required for login"
        };
    }

    try {
        const users = await getUsersFromFile();
        const foundUser = users.find(user => user.email === email);

        if (!foundUser) {
            return {
                success: false,
                statusCode: 404,
                message: "Invalid credential"
            };
        }

        const isMatched = await bcrypt.compare(password, foundUser.password);

        if (!isMatched) {
            return {
                success: false,
                statusCode: 401,
                message: "Unauthorized"
            };
        }
        //jwt token creation
        const token = jwt.sign(
            {
                id: foundUser.id,
                name: foundUser.name
            }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        }
        )
        return {
            success: true,
            statusCode: 200,
            message: `Welcome ${foundUser.name}`,
            user: removePassword(foundUser),
            token
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
}

const updateUserService = async (id, userData) => {
    const { name, email, password, profession } = userData;

    if (!name || !email || !profession) {
        return {
            success: false,
            statusCode: 400,
            message: "All fields are required"
        };
    }

    try {
        const users = await getUsersFromFile();
        const user = users.find(u => u.id === id);

        if (!user) {
            return {
                success: false,
                statusCode: 404,
                message: "User not found"
            };
        }

        const existingUser = users.find(u => u.email === email && u.id !== id);

        if (existingUser) {
            return {
                success: false,
                statusCode: 409,
                message: "Email already exists"
            };
        }

        user.name = name;
        user.email = email;
        user.profession = profession;
        if (password) {
            user.password = await bcrypt.hash(password, saltRounds);
        }

        await saveUsersToFile(users);

        return {
            success: true,
            statusCode: 200,
            message: "User updated",
            user: removePassword(user)
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
}

const deleteUserService = async (id) => {
    try {
        const users = await getUsersFromFile();
        const user = users.find(u => u.id === id);

        if (!user) {
            return {
                success: false,
                statusCode: 404,
                message: "User not found"
            };
        }

        const remainingUsers = users.filter(u => u.id !== id);
        await saveUsersToFile(remainingUsers);

        return {
            success: true,
            statusCode: 200,
            message: "User deleted",
            remainingUsers
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            statusCode: 500,
            message: "Internal Server Error"
        };
    }
}

module.exports = {
    getUsersService,
    getUserByIdService,
    createUserService,
    loginUserService,
    updateUserService,
    deleteUserService
}
