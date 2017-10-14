// User model

// Require mongoose
const mongoose = require('mongoose');

// Require bcrypt
const bcrypt = require('bcryptjs');

// Require db config file
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

// Create User
const User = module.exports = mongoose.model('User', UserSchema);

// Add user
module.exports.addUser = function(newUser, callback){
	bcrypt.genSalt(10, (err, salt)=>{
		bcrypt.hash(newUser.password, salt, (err, hash)=>{
			// Throw arror if any
			if(err) throw err;
			// Set the new user's pw to the hash
			newUser.password = hash;
			// Save the new user
			newUser.save(callback);
		});
	});
}

// Get user by ID function, export it so it is usable from outside
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

// Get user by email
module.exports.getUserByEmail = function(id, callback){
	const query = {email : email}
	User.findOne(query, callback);f
}