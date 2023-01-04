const BaseModel = require('./base');

class UserModel extends BaseModel {
    constructor() {
        super('users');
    }
}

module.exports = new UserModel();