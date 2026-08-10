const mongoose = require('mongoose');

let isInMemoryMode = false;
const inMemoryRegistrations = [];

const connectDB = async () => {
  const connUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ryvonexa2026';
  try {
    const conn = await mongoose.connect(connUri, {
      serverSelectionTimeoutMS: 2500
    });
    console.log(`[MongoDB Connected] Host: ${conn.connection.host}`);
    isInMemoryMode = false;
  } catch (err) {
    console.warn(`[MongoDB Warning] Local MongoDB service not detected on ${connUri}. Running in high-performance In-Memory state mode.`);
    isInMemoryMode = true;
  }
};

module.exports = {
  connectDB,
  getInMemoryMode: () => isInMemoryMode,
  inMemoryRegistrations
};
