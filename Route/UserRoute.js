const Router = require('express').Router();
const UserController = require('../Controller/UserController');

Router.get('/users', UserController.getUsers);

module.exports = Router;