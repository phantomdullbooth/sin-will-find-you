// ==================================== //
// ==================================== //
// CONSTANTS
// ==================================== //
// ==================================== //

const express = require('express');
const morgan = require('morgan');
const promise = require('bluebird');

const app = express();


// ==================================== //
// ==================================== //
// MIDDLEWARE & DEPENDENCIES
// ==================================== //
// ==================================== //

app.use(express.static("public"));
app.use(morgan('tiny'));



// ==================================== //
// ==================================== //
// CONTROLLERS 
// ==================================== //
// ==================================== //

const usersController = require('./controllers/users.js');
app.use('/users', usersController);

const port = process.env.PORT || 3000

// ==================================== //
// ==================================== //
// CONNECTION
// ==================================== //
// ==================================== //

app.listen(port, () => {
    console.log("listening on port " + port)
})