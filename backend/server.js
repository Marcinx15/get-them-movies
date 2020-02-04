const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use('/public', express.static('public'));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const movieRouter = require('./routes/movies')
const fileRouter = require('./routes/files');
const Users = require('./routes/users');

app.use('/movies', movieRouter);
app.use('/files', fileRouter);
app.use('/users', Users);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});