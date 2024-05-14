const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv'); // Ensure dotenv is required correctly
dotenv.config(); // Load environment variables

const mongoose = require('mongoose');
const dbConnection = require('./dbConnection'); // Now it's safe to require dbConnection
const productRoute = require('./route/productRoute');

app.use(cors());
app.use(express.json());
app.use('/api', productRoute);

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to ecommerce app API' });
});

const PORT = process.env.PORT || 8383;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});
