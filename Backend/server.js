const express = require("express");
const app = express();
const fs = require('fs');
const cors = require('cors');
const dotenv = require("dotenv");
const result = dotenv.config();

if (result.error) {
    console.error("Error loading .env file:", result.error);
}

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const mockData = require('./mockdata.json');

app.get('/api/cocktails', (req, res) => {
  res.json(mockData);
});

app.get('/api/cocktails/:name', (req, res) => {
  const { name } = req.params;
  const cocktail = mockData.find(cocktail => cocktail.name.toLowerCase() === name.toLowerCase());
  if (cocktail) {
    res.json(cocktail);
  } else {
    res.status(404).json({ message: 'Cocktail not found' });
  }
});

const saveMockDataToFile = (mockData) => {
  fs.writeFile('./mockdata.json', JSON.stringify(mockData, null, 2), (err) => {
      if (err) {
          console.error('Error writing to mockdata.json:', err);
      } else {
          console.log('Mock data saved to mockdata.json');
      }
  });
};

app.post('/api/cocktails', (req, res) => {
  const newCocktail = req.body;
  if (!newCocktail || !newCocktail.name || !newCocktail.about || !newCocktail.preparationTime || !newCocktail.ingredients || !newCocktail.steps_to_prepare) {
    res.status(400).json({ message: 'Please provide all required fields for the new cocktail.' });
  } else {
    mockData.push(newCocktail);
    saveMockDataToFile(mockData); 
    res.status(201).json({ message: 'Cocktail added successfully.', newCocktail });
  }
});

// app.get('/',(req,res)=>{
//     res.send('Welcome to Backend server of Fusion Drink');
// })

app.listen(port, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Server running on port ${port}`);
    }
});
