const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { initializeDb } = require('./src/utils/dbInit');
const fighterRoutes = require("./src/routes/fighterRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/fighters", fighterRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;

// Start server after database initialization
const startServer = async () => {
  try {
    // Initialize database
    await initializeDb();
    
    // Start server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();