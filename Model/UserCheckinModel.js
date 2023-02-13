const { Timestamp } = require('mongodb');
const {getDb} = require('../connectDb');
const {BaseModel} = require('./base');

function historiesCollection() {
    return getDb().collection('histories')
}

module.exports = {
    UserCheckin: (user) => {
        return historiesCollection().insertOne({
            userId: user._id,
            name: user.name,
            timeCheckin: new Date()
        });
    },
    ReportListUserLate: (date) => {
        return historiesCollection().find({
            timeCheckin: {
                $gte: new Date(new Date(date).setMonth(new Date(date).getMonth() - 1)),
                $lte: new Date(new Date(date)),
            }
        }).toArray();
    }
}