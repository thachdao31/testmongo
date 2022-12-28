const MongoClient = require('mongodb');
const express = require('express');
const app = express();
const {connectToDb} = require('./connectDb');
const UserRoute = require('./Route/UserRoute');

connectToDb((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to DB');
    }
});

app.use(express.json());

app.use('/', UserRoute);

app.listen(3030);
