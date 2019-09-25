const express = require('express');
const router = express.Router();
const db = require('../db/db.js');


// ================= GET (GET ALL ENTRIES) ================= //
router.get('/', (req, res, next) => {

    db.any('SELECT * FROM evidence')
        .then((data) => {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Retrieved all entries'
            });
        }).catch((err) => {
            return next(err);
        })
});

// ================= POST (ADD ENTRY) ================= //
router.post('/', (req, res, next) => {
    db.any(`INSERT INTO evidence (name, location, age, notes) VALUES ('${req.body.name}', '${req.body.location}', ${req.body.age}, '${req.body.notes}')`)
        .then((data) => {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Entry added'
            });
        }).catch((err) => {
            return next(err);
        })
});

module.exports = router;