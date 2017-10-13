// Just like routes/web.php

const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const users = require('./routes/users');

// Initialize app
const app = express();

// Define port
const port = 3000;

// Allow Cross Origin Resource Sharing
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Enable Body Parser Middleware
app.use(bodyparser.json());

// Index route
app.get('/', (req, res)=> {
	res.send('Invalid endpoint!');
});

// Users.js handles users routes
app.use('/users', users);

// Start server on defined port
app.listen(port, () => {
	console.log('Server started on port ' + port);
});