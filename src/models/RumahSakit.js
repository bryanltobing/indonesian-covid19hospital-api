const mongoose = require('mongoose');

const RumahSakitSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    address : {
        type: String,
        required: true,
        trim: true
    },
    region : {
        type: String,
        required: true,
        trim: true
    },
    phone : {
        type: String,
        trim: true
    },
    province: {
        type: String,
        required: true,
        trim: true
    },
    images : [Buffer]
});

const RumahSakitModel = mongoose.model('RumahSakit', RumahSakitSchema);

module.exports = {
    RumahSakitModel
}