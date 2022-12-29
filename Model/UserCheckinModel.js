const {getDb} = require('../connectDb');
const {getDateNow, getTime} = require('../GetDayTime');

function getHistoriesCollection() {
    return getDb().collection('histories')
}

module.exports = {
    UserCheckin: (user) => {
        return getHistoriesCollection().insertOne({
            userId: user._id,
            name: user.name,
            dayCheckin: getDateNow(),
            timeCheckin: getTime()
        });
    },
    ReportListUserLate: () => {
        return getHistoriesCollection().aggregate([
            {
                '$match': {
                    '$or': [
                    {
                        'timeCheckin.hour': {
                        '$gt': 15
                        }
                    }, {
                        '$and': [
                        {
                            'timeCheckin.hour': {
                            '$gte': 15
                            }
                        }, {
                            'timeCheckin.minutes': {
                            '$gt': 0
                            }
                        }
                        ]
                    }
                    ]
                }
            },
            {
              '$sort': {
                'dayCheckin': 1, 
                'timeCheckin': 1
              }
            }, {
              '$group': {
                '_id': '$userId', 
                'name': {
                  '$first': '$name'
                }, 
                'dayCheckin': {
                  '$first': '$dayCheckin'
                }, 
                'timeCheckin': {
                  '$first': '$timeCheckin'
                }
              }
            }
        ]).toArray();
    }
}