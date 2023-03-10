const UserModel = require('../Model/UserModel');

function returnError(res ,error) {
    return res.json({
        message : error
    })
}

module.exports = {
    getUsers: async (req, res) => {
        try {
            const listUsers = await UserModel.find();
            res.json(listUsers);
        } catch (error) {
            returnError(res, error);
        }
    },
    getUserById: async (req, res) => {
        try {
            const id = req.params.id;
            const user = await UserModel.findById(id);
            res.json(user);
        } catch (error) {
            returnError(res, error);
        }
    },
    createUser: async (req, res) => {
        try {
            const user = req.body;
            const result = await UserModel.insertOne(user);
            res.json({
                message: 'User created',
                newUserIdCreated: result.insertedId
            });
        } catch (error) {
            returnError(res, error);
        }
    },
    updateUser: async (req, res) => {
        try {
            const id = req.params.id;
            const user = req.body;
            await UserModel.updateById(id, user);
            res.json({
                message: 'User updated',
                updatedUser: user
            });
        } catch (error) {
            returnError(res, error);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const id = req.params.id;
            await UserModel.deleteById(id);
            res.json({
                message: 'User deleted',
                deletedUser: id
            });
        } catch (error) {
            returnError(res, error);
        }
    },
    deleteAll: async (req, res) => {
        try {
            await UserModel.deleteAll();
            res.json({
                message: 'delete all user'
            })
        } catch (error) {
            returnError(res, error)
        }
    },
    getAllClassField: async (req, res) => {
        try {
            const classField = await UserModel.getAllClassField();
            res.json(classField)
        } catch (error) {
            res.json(error)
        }
    }
}

