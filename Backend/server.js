const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const result = dotenv.config();

if (result.error) {
    console.error("Error loading .env file:", result.error);
}

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('Welcome to Backend server of Fusion Drink');
})

app.listen(port, (error) => {
    if (error) {
        console.error("Error starting the server:", error);
    } else {
        console.log(`Server running on port ${port}`);
    }
});
