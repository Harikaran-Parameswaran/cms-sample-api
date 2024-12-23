const mongoose = require('mongoose');

const tvChannelSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model('TVChannel', tvChannelSchema);