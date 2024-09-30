const express = require('express');
const router = express.Router();
const Cocktail = require('./Models/cocktailSchema');

// Middleware to check DB connection (optional)
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
        res.status(500).json({ message: 'Internal server error' });
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
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST to create new cocktail
router.post('/api/cocktails', async (req, res) => {
    const newCocktail = req.body;
    try {
        const createdCocktail = await Cocktail.create(newCocktail);
        res.status(201).json({ message: 'Cocktail added successfully.', newCocktail: createdCocktail });
    } catch (error) {
        console.error('Error creating cocktail:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// PUT to update existing cocktail by ID
router.put('/api/cocktails/:id', async (req, res) => {
    const { id } = req.params;
    const updatedCocktail = req.body;
    try {
        const updated = await Cocktail.findByIdAndUpdate(id, updatedCocktail, { new: true });
        if (updated) {
            res.json({ message: 'Cocktail updated successfully.', updatedCocktail: updated });
        } else {
            res.status(404).json({ message: 'Cocktail not found' });
    }} catch (error) {
        console.error('Error updating cocktail:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
