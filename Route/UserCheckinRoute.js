const Route = require('express').Router();
const UserCheckinController = require('../Controller/UserCheckinController');

Route.post('/user/checkin/:id', UserCheckinController.userCheckin);

Route.get('/user/report', UserCheckinController.reportListUserLate);

module.exports = Route;