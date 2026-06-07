const {
    getUsersService,
    getUserByIdService,
    createUserService,
    updateUserService,
    deleteUserService
} = require('../Services/userServices')

const getUsers = async (req, res) => {
    const result = await getUsersService();
    res.status(result.statusCode).json(result);
}

const getUserById = async (req, res) => {
    const id = Number(req.params.id);
    const result = await getUserByIdService(id);
    res.status(result.statusCode).json(result);
}

const createUser = async (req, res) => {
    const userData = req.body;
    const result = await createUserService(userData);
    res.status(result.statusCode).json(result);
}

const updateUser = async (req, res) => {
    const id = Number(req.params.id);
    const userData = req.body;
    const result = await updateUserService(id, userData);
    res.status(result.statusCode).json(result);
}

const deleteUser = async (req, res) => {
    const id = Number(req.params.id);
    const result = await deleteUserService(id);
    res.status(result.statusCode).json(result);
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}
