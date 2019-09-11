const express = require('express');
const router = express.Router();
const db = require('../db/db');


/*============================================
  Get all users
============================================*/
router.get('/', (eq, res, next) => {
  console.log('Getting all users');
  db.any('select * from users')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'Retrieved all users'
      });
    }).catch((err) => {
      return next(err);
    })

});

module.exports = router;