const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Register User
const registerUser = async (req, res) => {
  const { firstName, lastName, contactNo, whatsappNo, email, state, referralCode, password } = req.body;

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  try {
    // Create a new user
    const user = new User({
      firstName,
      lastName,
      contactNo,
      whatsappNo,
      email,
      state,
      referralCode,
      password,
    });

    // Save the user to the database
    await user.save();

    // Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser };
