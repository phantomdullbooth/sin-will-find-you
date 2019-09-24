// ==================================== //
// ==================================== //
// CONNECT TO POSTGRES WITH PG-PROMISE
// ==================================== //
// ==================================== //
const promise = require('bluebird');


// ==================================== //
// ==================================== //
// CREATE OPTIONS
// ==================================== //
// ==================================== //
const options = {
  promiseLib: promise
};

// Create the pg-promise object and export it
const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgresql://@localhost:5432/true_crime';
const db = pgp(connectionString);

// EXPORT
module.exports = db;