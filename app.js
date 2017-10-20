// Just like routes/web.php

	// * * * Requires * * *

const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

	
	// * * * Database * * *

// Connect to the db
mongoose.connect(config.database,{useMongoClient:true});

// On connection
mongoose.connection.on('connected', ()=>{
	console.log('Connected to database '+config.database);
})

// On error
mongoose.connection.on('error', (e)=>{
	console.log('Database error: '+e);
})


	// * * * App Init * * *

// Initialize app
const app = express();

// Define port
const port = 3000;

// Allow Cross Origin Resource Sharing
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

	
	// * * * Middleware * * *

// Body Parser Middleware
app.use(bodyparser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

	
	// * * * Routes * * *

// Index route
app.get('/', (req, res)=> {
	res.send('Invalid endpoint!');
});

// Users.js handles users routes
const users = require('./routes/users');
app.use('/users', users);


	// * * * Server * * *

// Start server on defined port
app.listen(port, () => {
	console.log('Server started on port ' + port);
});