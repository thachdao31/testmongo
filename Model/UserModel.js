const BaseModel = require('./base');

class UserModel extends BaseModel {
    constructor() {
        super(BaseModel);
        this.collectionName = 'users';
    }

    async getAllClassField() {
        const filter = {};
        const projection = {
            '_id': 0, 
            'class': 1
        };
        const limit = 12;
        return await this.getCollection().find(filter, {projection, limit}).toArray();
    }
}

module.exports = new UserModel();