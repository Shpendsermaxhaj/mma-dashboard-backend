const express = require("express");
const cors = require("cors");
const path = require('path');
const config = require('./src/config/config');

console.log(`Server starting in environment: ${config.nodeEnv}`);

const fighters = require("./src/routes/fighterRoutes");
const dbInit = require('./src/utils/dbInit');
const errorHandler = require('./src/middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/fighters", fighters);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', environment: config.nodeEnv });
});

// Error Handling Middleware
app.use(errorHandler);

// Initialize database and start server
const startServer = async () => {
  try {
    // Ensure database is initialized
    await dbInit.checkDbConnection();
    
    const PORT = config.port;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer()