/*=====================================
  Creates a database pg-promise object that can be used to connect to postgres
=====================================*/
const promise = require('bluebird');

// Create options (We're using bluebird for promises)
const options = {
  promiseLib: promise
};

// Create the pg-promise object and export it
const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgresql://Addison:testpass@localhost:5432/true_crime';
const db = pgp(connectionString);

module.exports = db;