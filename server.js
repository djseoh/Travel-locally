require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// JWT auth is used to secure the API
app.use(jwt());

// API routes
app.use('/user', require ('./users/users.controller'));

// global error handler
app.use(errorHandler);

// server start

const port = process.env.NODE_ENV === 'production' ? 80: 4000;
const server = app.listen (port, function () {
    console.log('Server listening on port ' + port);
});