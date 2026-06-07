const fs = require('fs/promises');
const path = require('path');

const filePath = path.join(__dirname, "../Database/users.json");

const getUsersFromFile = async () => {
    const data = await fs.readFile(filePath, "utf-8");
    return data ? JSON.parse(data) : [];
}

const saveUsersToFile = async (users) => {
    await fs.writeFile(filePath, JSON.stringify(users, null, 2));
}

const getUsersService = async () => {
    try {
        const users = await getUsersFromFile();

        return {
            success: true,
            statusCode: 200,
            message: "Users fetched",
            users
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
            user
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
    const { name, email, profession } = userData;

    if (!name || !email || !profession) {
        return {
            success: false,
            statusCode: 400,
            message: "All fields are required"
        };
    }

    try {
        const users = await getUsersFromFile();
        const user = {
            id: users.length + 1,
            name,
            email,
            profession
        };

        users.push(user);
        await saveUsersToFile(users);

        return {
            success: true,
            statusCode: 201,
            message: "User created",
            user
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
    const { name, email, profession } = userData;

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

        user.name = name;
        user.email = email;
        user.profession = profession;

        await saveUsersToFile(users);

        return {
            success: true,
            statusCode: 200,
            message: "User updated",
            user
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
    updateUserService,
    deleteUserService
}
