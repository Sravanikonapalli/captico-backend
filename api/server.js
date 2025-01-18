require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://captico-frontend.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB Connection Failed:', err.message);
    process.exit(1); // Exit the process if the connection fails
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

module.exports = app;
