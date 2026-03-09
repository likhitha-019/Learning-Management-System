const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const courseRoutes = require('./routes/courseRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });
