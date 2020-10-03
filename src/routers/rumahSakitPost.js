const express = require('express');
const router = express.Router();

// Model
const { RumahSakitModel } = require('./../models/RumahSakit');

// Middleware
const { authPost } = require('./../middleware/auth');

router.post('/rumahsakit', authPost, (req, res) => {
    const rumahsakit = new RumahSakitModel(req.body);
    rumahsakit.save()
    .then((response) => {
        res.status(201).json(response);
    })
    .catch((e) => {
        res.status(400).json({
            request: "failed",
            message: e.message
        });
    });
});

module.exports = router;