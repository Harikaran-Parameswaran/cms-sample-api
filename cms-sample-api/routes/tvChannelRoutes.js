const express = require('express');
const TVChannel = require('../models/TVChannel');

const router = express.Router();

// Get all TV channels
router.get('/', async (req, res) => {
    try {
        const channels = await TVChannel.find();
        res.json(channels);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add TV channels
router.post('/', async (req, res) => {
    try {
        const newChannel = new TVChannel(req.body);
        const savedChannel = await newChannel.save();
        res.status(201).json(savedChannel);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
