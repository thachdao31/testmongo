const {getDb} = require('../connectDb');
const {ObjectId} = require('mongodb');

module.exports = {
    getUsers: async (req, res) => {
       const listUsers = await getDb().collection('users').find({}).toArray();
         res.json(listUsers);
    }
}

