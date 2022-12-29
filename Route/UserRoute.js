const Router = require('express').Router();
const UserController = require('../Controller/UserController');

Router.get('/users', UserController.getUsers);

Router.get('/users/:id', UserController.getUserById);

Router.post('/users', UserController.createUser);

Router.put('/users/:id', UserController.updateUser);

Router.delete('/users/:id', UserController.deleteUser);

module.exports = Router;