const express = require('express');
const router = express.Router();

// Model
const { RumahSakitModel } = require('./../models/RumahSakit');

router.get('/rumahsakit', (req, res) => {
    RumahSakitModel.find({})
    .then((response) => {
        res.json(response);
    })
    .catch((e) => {
        res.status(404).json({
            request: "failed",
            message: e.message
        });
    });
});

module.exports = router;