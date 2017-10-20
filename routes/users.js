const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const config = require('../config/database');

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
	// res.send('AUTHENTICATE');
	const email = req.body.email;
	const password = req.body.password;

	User.getUserByEmail(email, (error, user)=>{
		// throw error if any
		if(error) throw error;
		// if NO user is found
		if(!user){
			return res.json({success:false, msg: 'User not found'});
		}

		// user is found, check if the password is correct
		User.comparePassword(password, user.password, (error, isMatch)=>{
			// throw error if any
			if(error) throw error;
			// if passwords match
			if(isMatch){
				// create token
				const token = jwt.sign({data:user}, config.secret, {
					// One week in seconds
					expiresIn: 604800
				});
				
				// response to front end
				res.json({
					success:true,
					token: 'JWT '+token,
					// send user as an object of select vars so the password doesn't get sent
					user: {
						id: user._id,
						name: user.name,
						email: email
					}})
			}
			else{
				return res.json({success:false, msg: 'Wrong password'});
			}
		});

	});
});

// Profile route (PROTECTED)
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next)=>{
	// res.send('PROFILE');
	res.json({user: req.user});
});

// Validation route
router.get('/validate', (req, res, next)=>{
	res.send('VALIDATION');
});

// Export router module
module.exports = router;