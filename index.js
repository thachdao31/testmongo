const express = require('express');
const app = express();
const {connectToDb} = require('./connectDb');
const UserRoute = require('./Route/UserRoute');
const UserCheckinRoute = require('./Route/UserCheckinRoute');

app.use(express.json());
connectToDb();

app.use('/', UserRoute);
app.use('/', UserCheckinRoute);

app.listen(3030);

