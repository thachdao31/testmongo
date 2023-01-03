const UserModel = require('../Model/UserModel');
const UserCheckinModel = require('../Model/UserCheckinModel');

module.exports = {
    userCheckin: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await UserModel.getUserById(id);
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
        res.json(listUserLate);
    }
}