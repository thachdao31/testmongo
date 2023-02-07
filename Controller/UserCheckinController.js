const UserModel = require('../Model/UserModel');
const UserCheckinModel = require('../Model/UserCheckinModel');

module.exports = {
    userCheckin: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await UserModel.findById(id);
            if (user) {
                await UserCheckinModel.UserCheckin(user);
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
        let listUserLate = await UserCheckinModel.ReportListUserLate();
        let time = [];
        listUserLate.forEach( user => {
            if(user.timeCheckin.getUTCHours() > 8 || (user.timeCheckin.getUTCHours() == 8 && user.timeCheckin.getUTCMinutes() > 0)) {
                time.push(user);
            }
        });
         console.log(time)
        res.json(listUserLate);
    }
}