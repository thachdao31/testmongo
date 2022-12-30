const express = require('express');
const app = express();
const {connectToDb} = require('./connectDb');
const UserRoute = require('./Route/UserRoute');
const UserCheckinRoute = require('./Route/UserCheckinRoute');

app.use(express.json());

app.use('/', UserRoute);
app.use('/', UserCheckinRoute);

connectToDb();

app.listen(3030);