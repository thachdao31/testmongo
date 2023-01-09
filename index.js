const express = require('express');
const app = express();
const {connectToDb} = require('./connectDb');
const UserRoute = require('./Route/UserRoute');
const UserCheckinRoute = require('./Route/UserCheckinRoute');
const cors = require('cors')


app.use(express.json());
app.use(cors())
connectToDb();

app.use('/api/users', UserRoute);
app.use('/api/user', UserCheckinRoute);

app.listen(3030);

