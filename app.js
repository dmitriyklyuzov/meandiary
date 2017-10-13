// Just like routes/web.php

const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

// Initialize app
const app = express();

// Define port
const port = 3000;

// Allow Cross Origin Resource Sharing
app.use(cors());

// Return response when root is requested
app.get('/', (req, res)=> {
	res.send('Invalid endpoint!');
});

// Listed on defined port
app.listen(port, () => {
	console.log('Server started on port ' + port);
});