import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';


const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;

// Updated the mongoose.connect without deprecated options
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log('Failed to connect to MongoDB', err);
  });
