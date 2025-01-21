const express = require('express');
const { registerUser } = require('../controllers/authController');

const router = express.Router();

// POST /register route for registering a user
router.post('/register', registerUser);

module.exports = router;
