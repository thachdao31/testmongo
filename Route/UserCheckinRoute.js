const Router = require('express').Router();
const UserCheckinController = require('../Controller/UserCheckinController');

Router.post('/', UserCheckinController.userCheckin);

Router.get('/', UserCheckinController.reportListUserLate);

module.exports = Router;