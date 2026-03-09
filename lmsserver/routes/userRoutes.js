const authMiddleware = require('../middleware/authMiddleware');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashed });
    await newUser.save();
    res.json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Purchase a course
router.post('/purchase', authMiddleware, async (req, res) => {
  const { courseId } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const alreadyPurchased = user.purchasedCourses.some(c => c.courseId.equals(courseId));
    if (alreadyPurchased) {
      return res.status(400).json({ error: 'Course already purchased' });
    }

    user.purchasedCourses.push({ courseId });
    await user.save();
    res.json({ message: 'Course purchased successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
