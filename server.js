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

<<<<<<< HEAD
const userController = require('./controllers/users.js')
app.use('/users', userController);
=======
const usersController = require('./controllers/users.js');
app.use('/users', usersController);
>>>>>>> 4f6873f719d5fc6480a30e46e05ecd093a16c393

const port = process.env.PORT || 3000

// ==================================== //
// ==================================== //
// CONNECTION
// ==================================== //
// ==================================== //

app.listen(port, () => {
    console.log("listening on port " + port)
})