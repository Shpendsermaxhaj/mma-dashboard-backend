const express = require("express");
const cors = require("cors");
require("dotenv").config();

const users = require("./src/routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", users);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
