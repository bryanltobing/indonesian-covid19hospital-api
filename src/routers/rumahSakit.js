const express = require('express');
const router = express.Router();

const escapeRegex = require('./../functionality/search');

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

// search by province
router.get('/rumahsakit/search', async (req, res) => {
    const query = req.query.province;
    try {
        if(!query) {
            throw new Error('provide your search query');
        }
        const regex = new RegExp(escapeRegex(query), 'gi');
        const rumahSakit = await RumahSakitModel.find({ province : regex });
        if(rumahSakit.length < 1) {
            throw new Error('No result found');
        }
        res.json(rumahSakit);
    } catch(e) {
        let redirect;
        if(req.headers.host === 'localhost:9000') {
            redirect = 'http://localhost:9000';
        } else {
            redirect = 'https://covidapp-id.herokuapp.com'
        }
        res.status(404).json({
            error : e.message,
            redirect : redirect  
        });
    }
});

module.exports = router;