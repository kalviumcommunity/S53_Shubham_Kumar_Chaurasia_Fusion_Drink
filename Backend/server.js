const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const result = dotenv.config();
const { ConnectToDB, stopDatabase, isConnected } = require('./database');
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
ConnectToDB().then();

if (result.error) {
    console.error("Error loading .env file:", result.error);
}

const Cocktail = require('./Models/cocktailSchema');

app.get("/", (req, res) => {
    isConnected().then(connected => {
        res.json({ message: connected ? "connected" : "disconnected" });
    });
});

// To Get all data
app.get('/api/cocktails', async (req, res) => {
    try {
        const cocktails = await Cocktail.find();
        res.json(cocktails);
    } catch (error) {
        console.error('Error fetching cocktails:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// To Get data by Id
app.get('/api/cocktails/:id', async (req, res) => {
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

// Create data
app.post('/api/cocktails', async (req, res) => {
    const newCocktail = req.body;
    try {
        const createdCocktail = await Cocktail.create(newCocktail);
        res.status(201).json({ message: 'Cocktail added successfully.', newCocktail: createdCocktail });
    } catch (error) {
        console.error('Error creating cocktail:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Update data
app.put('/api/cocktails/:id', async (req, res) => {
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
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(port, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Server running on port ${port}`);
    }
});
