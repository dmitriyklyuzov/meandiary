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
		type: String
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
