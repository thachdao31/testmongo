const {ObjectId} = require('mongodb');
const {getDb} = require('../connectDb');
const BaseModel = require('./base');

class UserModel extends BaseModel {
    constructor() {
        super('users');
    }
}

module.exports = new UserModel();



// function getUsersCollection() {
//     return getDb().collection('users');
// }

// module.exports = {
//     getUsers: () => {
//         return getUsersCollection().find({}).toArray();
//     },
//     getUserById: (id) => {
//         return getUsersCollection().findOne({_id: ObjectId(id)});
//     },
//     createUser: (user) => {
//         return getUsersCollection().insertOne(user);
//     },
//     updateUser: (id, user) => {
//         return getUsersCollection().updateOne({_id: ObjectId(id)}, {$set: user});
//     },
//     deleteUser: (id) => {
//         return getUsersCollection().deleteOne({_id: ObjectId(id)});
//     }
// }
