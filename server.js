require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const announcementRoutes = require('./routes/announcements');

const app = express();

connectDB();

app.use(cors({
  origin: 'https://announcemate.vercel.app/' // Replace with your Vercel URL
}));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/announcements', announcementRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
