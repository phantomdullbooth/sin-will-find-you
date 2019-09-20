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

router.post('evidence', db.createPuppy),
router.put('evidence/:id', db.updatePuppy)
router.delete('evidence/:id', db.removePuppy);