const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require('cors');

const app = express();
const port = process.env.PORT;

// Connect to the database
connectDB();

// CORS configuration
app.use(cors({
    origin: ['https://apimern-frontend.vercel.app'], // Allow this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Allow credentials
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');

// Define your routes
app.use('/api/v1', require('./routes/indexRoutes'));

// Start the server
app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Server is running on port ${port}`);
});