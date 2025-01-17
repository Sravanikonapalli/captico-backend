require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./api/routes/auth');
const courseRoutes = require('./api/routes/courses');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({
<<<<<<< HEAD
  origin: 'https://captico-frontend.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
=======
  origin: 'https://captico-frontend.vercel.app', // Replace with your actual frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

>>>>>>> c5bfc4b5e20635ec4eb903143fa3fe930d1d5082

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// Export the app for Vercel to use
module.exports = app;
