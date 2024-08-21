const mongoose = require('mongoose');

const CatwaySchema = new mongoose.Schema({
    catwayNumber: { type: String, required: true },
    type: { type: String, enum: ['long', 'short'], required: true },
    catwayState: { type: String, required: true },
});

module.exports = mongoose.model('Catway', CatwaySchema);
