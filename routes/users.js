const express = require('express');
const router = express.Router();

// Rregister route
router.post('/register', (req, res, next)=>{
	res.send('REGISTER');
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