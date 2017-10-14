const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Bring in user model
const User = require('../models/user');

// Rregister route
router.post('/register', (req, res, next)=>{
	let newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});

	User.addUser(newUser, (err, user)=>{
		if(err){
			res.json({
				success: false,
				message: 'Failed to register user'
			});
		}
		else{
			res.json({
				success: true,
				message: 'User successfully registered'
			});
		}
	});
});

// Authentication route
router.post('/authenticate', (req, res, next)=>{
	res.send('AUTHENTICATE');
});

// Profile route
router.get('/profile', (req, res, next)=>{
	res.send('PROFILE');
});

// Validation route
router.get('/validate', (req, res, next)=>{
	res.send('VALIDATION');
});

// Export router module
module.exports = router;