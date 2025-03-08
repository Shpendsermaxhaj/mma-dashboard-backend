const express = require("express");
const cors = require("cors");
const config = require('./src/config');
const errorHandler = require('./src/middleware/errorHandler');

// Routes
const fighterRoutes = require("./src/routes/fighterRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/fighters", fighterRoutes);

// Error Handling
app.use(errorHandler);

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
