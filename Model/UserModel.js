const {ObjectId} = require('mongodb');
const {getDb} = require('../connectDb');

module.exports = {
    getUsers: () => {
        return getDb().collection('users').find({}).toArray();
    },
    getUserById: (id) => {
        return getDb().collection('users').findOne({_id: ObjectId(id)});
    },
    createUser: (user) => {
        return getDb().collection('users').insertOne(user);
    },
    updateUser: (id, user) => {
        return getDb().collection('users').updateOne({_id: ObjectId(id)}, {$set: user});
    },
    deleteUser: (id) => {
        return getDb().collection('users').deleteOne({_id: ObjectId(id)});
    }
}
