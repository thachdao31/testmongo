const Router = require('express').Router();
const UserCheckinController = require('../Controller/UserCheckinController');

Router.post('/', UserCheckinController.userCheckin);

Router.get('/:date', UserCheckinController.reportListUserLate);

module.exports = Router;