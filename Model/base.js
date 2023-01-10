const {getDb} = require('../connectDb');
const {ObjectId} = require('mongodb');

class BaseModel {
    constructor(collectionName) {
        this.collectionName = collectionName;
    }

    getCollection() {
        return getDb().collection(this.collectionName);
    }

    async insertOne(data) {
        return await this.getCollection().insertOne(data);
    }
    async find(query) {
        return await this.getCollection().find(query).toArray();
    }
    async findById(id) {
        return await this.getCollection().findOne({_id: ObjectId(id)});
    }
    async updateById(id, data) {
        return await this.getCollection().updateOne({_id: ObjectId(id)}, {$set: data});
    }
    async deleteById(id) {
        return await this.getCollection().deleteOne({_id: ObjectId(id)});
    }
    async deleteAll() {
        return await this.getCollection().remove({});
    }
}

module.exports = BaseModel;
