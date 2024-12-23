const express = require('express');
const Movie = require('../models/Movie');

const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add movies
router.post('/', async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.status(201).json(savedMovie);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
