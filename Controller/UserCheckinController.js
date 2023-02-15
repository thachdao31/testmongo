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

        const groupBy = keys => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = keys.map(key => obj[key]).join('-');
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

        let test1 = groupBy(['name']);
        let test2 = groupBy(['userId']);
        let test3 = groupBy(['name', 'userId'])

        let test4 = test3(listUserLate)


        console.log(test4)

        //console.log(resultCheck);

        res.json(test4);
    }
}