const {getDb} = require('../connectDb');
const {BaseModel} = require('./base');

// class UserCheckinModel extends BaseModel {
//     constructor() {
//         super('histories');
//     }
// }

// module.exports = new UserCheckinModel();

function getHistoriesCollection() {
    return getDb().collection('histories')
}

module.exports = {
    UserCheckin: (user) => {
        return getHistoriesCollection().insertOne({
            userId: user._id,
            name: user.name,
            timeCheckin: new Date()
        });
    },
    ReportListUserLate: () => {
      return getHistoriesCollection().find({ timeCheckin: { $gte: new Date('2023-01-03T07:47:55.317+00:00')}}).toArray();
    }
}