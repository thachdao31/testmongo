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
    ReportListUserLate: () => {
        return historiesCollection().find({
            timeCheckin: {
                $gte: new Date(new Date("2023-02-09")),
                $lte: new Date(new Date("2023-02-11")),
            }
        }).toArray();
    }
}