// app.js

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');

// initialize our express app
const app = express();

// Set up mongoose connection
let dev_db_url = 'mongodb://tyrna:pastelito123@ds157493.mlab.com:57493/arturoesmipapi';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
	console.log('Server is up and running on port number ' + port);
});
