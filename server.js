// Setting up the PORT for the server. If the environment variable 'PORT' is defined, use its value; otherwise, use 3001 as the default value.
const PORT = process.env.PORT || 3001;

// Requiring the necessary modules
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path'); 

// Requiring the custom API and HTML routes defined in separate files
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html');

// Configuring the middleware
// Middleware to parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Mounting the API routes
app.use('/api', apiRoutes);

// Mounting the HTML routes
app.use('/', htmlRoutes);

// Start the server, listening on the specified PORT
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});