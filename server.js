const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';
dotenv.config({ path: path.resolve(__dirname, envFile) });

console.log(`Environment: ${process.env.NODE_ENV}`);

const fighters = require("./src/routes/userRoutes");
const dbInit = require('./src/utils/dbInit');

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/fighters", fighters);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', environment: process.env.NODE_ENV });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Initialize database and start server
const startServer = async () => {
  try {
    // Ensure database is initialized
    await dbInit.initializeDb();
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();