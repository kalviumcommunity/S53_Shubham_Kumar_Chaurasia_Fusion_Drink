const express = require('express');
const router = express.Router();
const Cocktail = require('./Models/cocktailSchema');
const { isConnected } = require('./database');

// Root route
router.get("/", (req, res) => {
    isConnected().then(connected => {
        res.json({ message: connected ? "connected" : "disconnected" });
    });
});

// GET all cocktails
router.get('/api/cocktails', async (req, res) => {
    try {
        const cocktails = await Cocktail.find();
        res.json(cocktails);
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        
        // Check for connection issues
        if (error.name === 'MongoNetworkError') {
            return res.status(503).json({ message: 'Database connection issue. Please try again later.' });
        }
        
        res.status(500).json({ message: 'Error fetching cocktails: ' + error.message });
    }
});

// GET cocktail by ID
router.get('/api/cocktails/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const cocktail = await Cocktail.findById(id);
        if (cocktail) {
            res.json(cocktail);
        } else {
            res.status(404).json({ message: 'Cocktail not found' });
        }
    } catch (error) {
        console.error('Error fetching cocktail:', error);

        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid cocktail ID format' });
        }

        if (error.name === 'MongoNetworkError') {
            return res.status(503).json({ message: 'Database connection issue. Please try again later.' });
        }
        
        res.status(500).json({ message: 'Error fetching cocktail: ' + error.message });
    }
});

// POST to create a new cocktail
router.post('/api/cocktails', async (req, res) => {
    const newCocktail = req.body;
    try {
        const createdCocktail = await Cocktail.create(newCocktail);
        res.status(201).json({ message: 'Cocktail added successfully.', newCocktail: createdCocktail });
    } catch (error) {
        console.error('Error creating cocktail:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error: ' + error.message });
        }

        if (error.name === 'MongoNetworkError') {
            return res.status(503).json({ message: 'Database connection issue. Please try again later.' });
        }

        res.status(500).json({ message: 'Error creating cocktail: ' + error.message });
    }
});

// PUT to update an existing cocktail by ID
router.put('/api/cocktails/:id', async (req, res) => {
    const { id } = req.params;
    const updatedCocktail = req.body;
    try {
        const updated = await Cocktail.findByIdAndUpdate(id, updatedCocktail, { new: true });
        if (updated) {
            res.json({ message: 'Cocktail updated successfully.', updatedCocktail: updated });
        } else {
            res.status(404).json({ message: 'Cocktail not found' });
        }
    } catch (error) {
        console.error('Error updating cocktail:', error);

        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid cocktail ID format' });
        }

        if (error.name === 'MongoNetworkError') {
            return res.status(503).json({ message: 'Database connection issue. Please try again later.' });
        }

        res.status(500).json({ message: 'Error updating cocktail: ' + error.message });
    }
});

module.exports = router;
