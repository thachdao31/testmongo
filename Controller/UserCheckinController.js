const UserModel = require('../Model/UserModel');
const UserCheckinModel = require('../Model/UserCheckinModel');

module.exports = {
    userCheckin: async (req, res) => {
        const id = req.body.id;
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
        let listUserCheckin = await UserCheckinModel.ReportListUserLate(req.params.date);
        
        


        res.json(test);
    }
}