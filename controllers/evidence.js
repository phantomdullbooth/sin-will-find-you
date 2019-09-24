const express = require('express');
const router = express.Router();
const db = require('../db/db.js');


/*============================================
  Get all evidence
============================================*/
router.get('/', (req, res, next) => {
    console.log('Getting all evidence');
    db.any('select * from evidence')
        .then((data) => {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Retrieved all evidence'
            });
        }).catch((err) => {
            return next(err);
        })
});

router.post('/', (req, res, next) => {
    
    db.any(`INSERT INTO evidence (name, location, age, notes) VALUES ('${req.body.name}', '${req.body.location}', ${req.body.age}, '${req.body.notes}')`)
        .then((data) => {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Posted evidence'
            });
        }).catch((err) => {
            return next(err);
        })
});

module.exports = router;