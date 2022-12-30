const {MongoClient} = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';

let db;
 
const connectToDb = () => {
    MongoClient.connect(url)
    .then(client => {
        db = client.db('mydb');
        console.log('connected to database')
    })
    .catch(err => {
        console.log(err);
    })
}

const getDb = () => {
    return db;
}

module.exports = {
    connectToDb,
    getDb
}


