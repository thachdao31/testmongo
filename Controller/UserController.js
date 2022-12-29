const UserModel = require('../Model/UserModel');

module.exports = {
    getUsers: async (req, res) => {
        const listUsers = await UserModel.getUsers();
        res.json(listUsers);
    },
    getUserById: async (req, res) => {
        const id = req.params.id;
        const user = await UserModel.getUserById(id);
        res.json(user);
    },
    createUser: async (req, res) => {
        const user = req.body;
        const result = await UserModel.createUser(user);
        res.json({
            message: 'User created',
            newUserIdInsert: result.insertedId
        });
    },
    updateUser: async (req, res) => {
        const id = req.params.id;
        const user = req.body;
        const result = await UserModel.updateUser(id, user);
        res.json({
            message: 'User updated',
            updatedUser: user
        });
    },
    deleteUser: async (req, res) => {
        const id = req.params.id;
        const result = await UserModel.deleteUser(id);
        res.json({
            message: 'User deleted',
            deletedUser: id
        });
    }
}

