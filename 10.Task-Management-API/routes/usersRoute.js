const express = require('express');
const router = express.Router();
const authMiddleware = require("../Middleware/authMiddleware");
const {
    getUsers,
    getUserById,
    createUser,
    loginUser,
    updateUser,
    deleteUser
} = require('../Controllers/userController');


router.get(
    "/profile",
    authMiddleware,
    (req, res) => {
        res.status(200).json({
            success: true,
            user: req.user
        });
    }
);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
