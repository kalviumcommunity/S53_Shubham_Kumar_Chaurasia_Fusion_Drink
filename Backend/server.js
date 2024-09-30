const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const result = dotenv.config();
const { ConnectToDB } = require('./database');
const routes = require('./routes'); // Import routes

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Connect to the database
ConnectToDB().then();

if (result.error) {
    console.error("Error loading .env file:", result.error);
}

// Use routes from the routes.js file
app.use('/', routes);

// Start the server
app.listen(port, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Server running on port ${port}`);
    }
});
