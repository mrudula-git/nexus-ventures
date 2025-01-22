const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getCurrentUser, updateReferralId } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/me', protect, getCurrentUser);
router.put('/referral', protect, updateReferralId);

module.exports = router;
