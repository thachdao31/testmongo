const UserModel = require('../Model/UserModel');
const UserCheckinModel = require('../Model/UserCheckinModel');
const {ObjectId} = require('mongodb');

module.exports = {
    userCheckin: async (req, res) => {
        const id = req.body.id;
        const date = new Date();
        try {
            const user = await UserModel.findById(id);
            if (user) {
                await UserCheckinModel.UserCheckin(user, new Date);
                res.json({
                    message: 'User checked in',
                    userIdCheckin: user._id
                });
            } else {
                res.json({
                    message: 'User not found',
                    userId: id
                });
            }
        } catch (error) {
            console.log(error);
        }
    },
    reportListUserLate: async (req, res) => {
        const listUserLate = await UserCheckinModel.ReportListUserLate(req.params.date);
        
        let resultCheck = [];

        listUserLate.forEach(user => {
            if(user.timeCheckin.getHours() < 10 || (user.timeCheckin.getHours() == 10 && user.timeCheckin.getMinutes() == 0)) {
                resultCheck.push(user)
            }
        });

    

        res.json(resultCheck);
    }
}