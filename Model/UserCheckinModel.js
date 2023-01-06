const {getDb} = require('../connectDb');
const {BaseModel} = require('./base');

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
      return getHistoriesCollection().find({}).toArray();
    }
}